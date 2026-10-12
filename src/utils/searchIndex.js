// ============================================================
// src/utils/searchIndex.js
// DevSphere universal search: index + ranking.
//
// Index sources (from lessonRegistry):
//   - tutorial  -> technology landing page   /tutorials/:tech
//   - lesson    -> individual lesson         /tutorials/:tech/:lesson
//   - resource  -> DevSphere resource item   /tutorials/:tech/:resource
//
// Ranking idea:
//   title match is the dominant signal; parent-technology, tags,
//   keywords and description are supporting signals. A result that
//   covers every query term always ranks above a partial match.
// ============================================================
import lessonRegistry from "../registry/lessonRegistry";

/* ------------------------------------------------------------
   Text helpers
------------------------------------------------------------ */
function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9+#.]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function toArray(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") return [value];
  return [];
}

function unique(values) {
  return [
    ...new Set(
      values
        .filter((value) => value != null && String(value).trim())
        .map((value) => String(value).trim())
    ),
  ];
}

function containsPhrase(text, phrase) {
  if (!text || !phrase) return false;
  return ` ${text} `.includes(` ${phrase} `);
}

// A pre-normalized field: full text, word set and word count.
function makeField(value) {
  const text = normalize(value);
  const list = text ? text.split(" ") : [];
  return { text, words: new Set(list), count: list.length };
}

/* ------------------------------------------------------------
   Aliases / abbreviations (query side).
   Every member of a group is treated as equivalent.
   Extend this list as DevSphere content grows.
------------------------------------------------------------ */
const ALIAS_GROUPS = [
  ["js", "javascript"],
  ["ts", "typescript"],
  ["py", "python"],
  ["reactjs", "react.js", "react"],
  ["node", "nodejs", "node.js"],
  ["express", "expressjs", "express.js"],
  ["next", "nextjs", "next.js"],
  ["auth", "authentication"],
  ["db", "database"],
  ["oop", "oops", "object oriented programming"],
  ["ml", "machine learning"],
  ["dl", "deep learning"],
  ["nlp", "natural language processing"],
  ["cv", "computer vision"],
  ["genai", "generative ai"],
  ["k8s", "kubernetes"],
  ["aws", "amazon web services"],
  ["postgres", "postgresql"],
  ["mongo", "mongodb"],
  ["cicd", "ci cd"],
  ["cpp", "c++"],
  ["jwt", "json web token"],
];

const QUERY_ALIASES = (() => {
  const map = {};
  ALIAS_GROUPS.forEach((group) => {
    const members = group.map(normalize);
    members.forEach((member) => {
      map[member] = members.filter((other) => other !== member);
    });
  });
  return map;
})();

// Simple singular/plural counterpart ("hooks" <-> "hook").
function pluralCounterpart(word) {
  if (!/^[a-z0-9]+$/.test(word) || word.length < 4) return null;
  if (word.endsWith("ss")) return null;
  return word.endsWith("s") ? word.slice(0, -1) : `${word}s`;
}

function termAlternatives(term) {
  const alts = [term, ...(QUERY_ALIASES[term] || [])];
  const plural = pluralCounterpart(term);
  if (plural) alts.push(plural);
  return unique(alts);
}

/* ------------------------------------------------------------
   Build the index
------------------------------------------------------------ */
function getTechKeywords(info) {
  return unique([
    ...toArray(info?.tags),
    ...toArray(info?.keywords),
    ...toArray(info?.seo?.keywords),
  ]);
}

function isSearchableItem(item) {
  if (!item?.slug || !item?.title) return false;
  const status = String(item?.status ?? "").toLowerCase().trim();
  return !["draft", "unpublished", "coming-soon", "coming soon", "planned"].includes(
    status
  );
}

function buildFields({ title, context, tags, keywords, description }) {
  return {
    title: makeField(title),
    context: makeField(context),
    tags: makeField(tags.join(" ")),
    tagList: tags.map(normalize).filter(Boolean),
    keywords: makeField(keywords.join(" ")),
    description: makeField(description),
  };
}

function buildSearchIndex() {
  const records = [];

  Object.entries(lessonRegistry).forEach(([techSlug, tutorial]) => {
    const info = tutorial?.info;
    if (!info) return;

    const techTitle = info.title || info.shortTitle || techSlug;
    const techShortTitle = info.shortTitle || techTitle;
    const techContext = [
      techTitle,
      techShortTitle,
      techSlug.replace(/-/g, " "),
      info.category,
    ].join(" ");

    // Names that identify this technology exactly (used for the
    // landing-page boost, e.g. query "react" -> React tutorial).
    const landingKeys = unique([
      normalize(techShortTitle),
      normalize(techSlug.replace(/-/g, " ")),
      normalize(techTitle).replace(/ tutorial$/, ""),
    ]);

    // 1) Technology landing page
    const landingTags = unique([...toArray(info.tags), ...toArray(info.category)]);
    records.push({
      id: `tutorial:${techSlug}`,
      type: "tutorial",
      category: "tutorials",
      title: techTitle,
      description: info.description || "",
      url: `/tutorials/${techSlug}`,
      techSlug,
      techTitle,
      landingKeys,
      f: buildFields({
        title: techTitle,
        context: techContext,
        tags: landingTags,
        keywords: getTechKeywords(info),
        description: info.description || "",
      }),
    });

    // 2) Lessons (from the existing lessonIndex)
    const seenLessons = new Set();
    Object.values(tutorial.lessonIndex || {}).forEach((lesson) => {
      if (!isSearchableItem(lesson)) return;
      if (seenLessons.has(lesson.slug)) return;
      seenLessons.add(lesson.slug);

      records.push({
        id: `lesson:${techSlug}:${lesson.slug}`,
        type: "lesson",
        category: "tutorials",
        title: lesson.title,
        description: lesson.description || "",
        url: `/tutorials/${techSlug}/${lesson.slug}`,
        techSlug,
        techTitle,
        readingTime: lesson.readingTime || null,
        difficulty: lesson.difficulty || null,
        f: buildFields({
          title: lesson.title,
          context: techContext,
          tags: unique(toArray(lesson.tags)),
          // Technology-level keywords are intentionally NOT merged here,
          // otherwise every lesson of a technology gets an identical bonus.
          keywords: unique(toArray(lesson.keywords)),
          description: lesson.description || "",
        }),
      });
    });

    // 3) DevSphere resources (cheatsheets, references, ecosystem pages...)
    const seenResources = new Set();
    Object.values(tutorial.resourceIndex || {}).forEach((item) => {
      if (!isSearchableItem(item)) return;
      if (seenLessons.has(item.slug) || seenResources.has(item.slug)) return;
      seenResources.add(item.slug);

      records.push({
        id: `resource:${techSlug}:${item.slug}`,
        type: "resource",
        category: "tutorials",
        title: item.title,
        description: item.description || "",
        url: `/tutorials/${techSlug}/${item.slug}`,
        techSlug,
        techTitle,
        readingTime: item.readingTime || null,
        f: buildFields({
          title: item.title,
          context: techContext,
          tags: unique(toArray(item.tags)),
          keywords: unique(toArray(item.keywords)),
          description: item.description || "",
        }),
      });
    });
  });

  return records;
}

export const searchIndex = buildSearchIndex();

/* ------------------------------------------------------------
   Query understanding
------------------------------------------------------------ */
const STOP_WORDS = new Set([
  "a", "an", "and", "are", "as", "at", "by", "for", "from", "how", "in",
  "into", "is", "it", "of", "on", "or", "the", "to", "using", "what",
  "when", "where", "which", "with",
]);

// Words that describe the content type, not the topic.
const GENERIC_WORDS = new Set([
  "tutorial", "tutorials", "lesson", "lessons", "course", "courses",
  "guide", "learn", "learning",
]);

function getQueryTerms(query) {
  const words = query.split(" ").filter(Boolean);
  const meaningful = words.filter((word) => !STOP_WORDS.has(word));
  const topical = meaningful.filter((word) => !GENERIC_WORDS.has(word));
  if (topical.length) return topical;
  return meaningful.length ? meaningful : words;
}

function buildQueryContext(query) {
  const terms = getQueryTerms(query);
  const groups = terms.map(termAlternatives);

  // Phrase variants: original, alias-substituted, plural-toggled.
  const tokens = query.split(" ");
  const variants = new Set([query]);
  variants.add(
    tokens.map((token) => (QUERY_ALIASES[token]?.[0] ?? token)).join(" ")
  );
  const last = tokens[tokens.length - 1];
  const lastToggle = pluralCounterpart(last);
  if (lastToggle) variants.add([...tokens.slice(0, -1), lastToggle].join(" "));

  return { query, terms, groups, n: groups.length, variants: [...variants] };
}

function fieldHasAlt(field, alt) {
  if (!field.text) return false;
  return alt.includes(" ") ? containsPhrase(field.text, alt) : field.words.has(alt);
}

function fieldHasGroup(field, group) {
  return group.some((alt) => fieldHasAlt(field, alt));
}

/* ------------------------------------------------------------
   Scoring
------------------------------------------------------------ */
const TYPE_WEIGHTS = {
  // Universal: tutorials slightly preferred, resources neutral.
  all: { tutorial: 1.1, lesson: 1.08, resource: 1.0 },
  // Tutorials page: tutorial content strongly preferred.
  tutorials: { tutorial: 1.3, lesson: 1.25, resource: 1.05 },
};

function scoreRecord(record, q, weights) {
  const { f } = record;
  const { groups, n, variants } = q;

  const tHit = groups.map((g) => fieldHasGroup(f.title, g));
  const cHit = groups.map((g) => fieldHasGroup(f.context, g));
  const gHit = groups.map((g) => fieldHasGroup(f.tags, g));
  const kHit = groups.map((g) => fieldHasGroup(f.keywords, g));
  const dHit = groups.map((g) => fieldHasGroup(f.description, g));
  const count = (flags) => flags.filter(Boolean).length;

  const titleHits = count(tHit);
  const ctxExtra = count(cHit.map((hit, i) => hit && !tHit[i]));
  const tagHits = count(gHit);
  const kwHits = count(kHit);
  const descHits = count(dHit);
  const unionHits = count(groups.map((_, i) => tHit[i] || cHit[i] || gHit[i] || kHit[i]));

  const coverage = n ? unionHits / n : 0;
  const minimumCoverage = n >= 2 ? 0.5 : 1;
  const eligible = coverage >= minimumCoverage;

  // ---- Title (dominant signal)
  const exactTitle = variants.some((v) => f.title.text === v);
  const phraseInTitle = exactTitle || variants.some((v) => containsPhrase(f.title.text, v));
  let title = 0;
  if (exactTitle) title += 100;
  else if (phraseInTitle) title += 60;
  title += (titleHits / n) * 30;
  if (n > 1 && titleHits === n && !phraseInTitle) title += 12;
  // Focused titles ("React Forms") beat long ones that merely mention the term.
  if (titleHits > 0 && f.title.count > 0) {
    title += 8 * Math.min(1, titleHits / f.title.count);
  }

  // ---- Parent technology (only for terms the title did not already cover)
  const context = (ctxExtra / n) * 10;

  // ---- Tags
  let tags = (tagHits / n) * 8;
  if (f.tagList.some((tag) => variants.includes(tag))) tags += 12;
  else if (variants.some((v) => containsPhrase(f.tags.text, v))) tags += 7;

  // ---- Keywords
  let keywords = (kwHits / n) * 5;
  if (variants.some((v) => containsPhrase(f.keywords.text, v))) keywords += 5;

  // ---- Description (supporting evidence only)
  let description = (descHits / n) * 6;
  if (variants.some((v) => containsPhrase(f.description.text, v))) description += 5;

  // ---- Cross-field bonus: all terms covered, but not by the title alone
  const crossField = n > 1 && unionHits === n && titleHits < n ? 12 : 0;

  // ---- Technology landing page that matches the query exactly
  const landing =
    record.type === "tutorial" &&
    variants.some((v) => record.landingKeys.includes(v))
      ? 45
      : 0;

  const breakdown = { title, context, tags, keywords, description, crossField, landing };
  const raw = Object.values(breakdown).reduce((sum, value) => sum + value, 0);
  const multiplier = weights[record.type] ?? 1;

  return {
    ...record,
    score: Math.round(raw * multiplier * 100) / 100,
    scoreBreakdown: breakdown,
    queryCoverage: coverage,
    // 2 = every query term matched, 1 = partial match
    tier: unionHits === n ? 2 : 1,
    exactTitle,
    eligible,
  };
}

const TYPE_ORDER = { tutorial: 0, lesson: 1, resource: 2 };

/* ------------------------------------------------------------
   Public API
------------------------------------------------------------ */
export const SEARCH_SCOPES = ["all", "tutorials", "courses"];

export function normalizeScope(scope) {
  const value = String(scope || "all").toLowerCase();
  return SEARCH_SCOPES.includes(value) ? value : "all";
}

/**
 * searchContent(query, scope)
 *  - "all"       universal search
 *  - "tutorials" tutorial content boosted
 *  - "courses"   no dedicated course index yet, so this returns the same
 *                relevant tutorial content as universal search; the
 *                Search page labels it as "related tutorials".
 */
export function searchContent(query, scope = "all") {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return [];

  const validScope = normalizeScope(scope);
  const q = buildQueryContext(normalizedQuery);
  if (!q.n) return [];

  const weights = TYPE_WEIGHTS[validScope] || TYPE_WEIGHTS.all;

  return searchIndex
    .map((record) => scoreRecord(record, q, weights))
    .filter((result) => result.eligible && result.score > 0)
    .sort((a, b) => {
      if (b.tier !== a.tier) return b.tier - a.tier;
      if (b.score !== a.score) return b.score - a.score;
      if (a.exactTitle !== b.exactTitle) return a.exactTitle ? -1 : 1;
      if (a.f.title.count !== b.f.title.count) {
        return a.f.title.count - b.f.title.count;
      }
      if (a.type !== b.type) return TYPE_ORDER[a.type] - TYPE_ORDER[b.type];
      return a.title.localeCompare(b.title);
    });
}