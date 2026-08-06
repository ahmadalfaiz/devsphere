// ============================================================
// src/utils/buildIndex.js
// The ONE place graph, SEO, and lookup indices get generated.
// Every tech in registry/lessons/*.js reuses this same logic.
// ============================================================

/**
 * Flattens sections -> lessons, applies section-level difficulty
 * defaults, and returns a slug-keyed dictionary with computed
 * seo + graph fields. O(1) lookup via lessonIndex[slug].
 */
export function buildLessonIndex(sections, tutorialShortTitle) {
  const flat = sections.flatMap((section) =>
    section.lessons.map((lesson) => ({
      ...lesson,
      difficulty: lesson.difficulty || section.difficulty
    }))
  );

  return flat.reduce((index, lesson, i) => {
    index[lesson.slug] = {
      ...lesson,
      seo: {
        title: `${lesson.title} - DevSphere ${tutorialShortTitle} Tutorial`,
        description: lesson.description,
        keywords: [...new Set([lesson.title, ...lesson.tags])]
      },
      graph: {
        previous: i > 0 ? flat[i - 1].slug : null,
        next: i < flat.length - 1 ? flat[i + 1].slug : null,
        related: lesson.related || [],
        prerequisites: lesson.prerequisites || [],
        recommended: lesson.recommended || []
      }
    };
    return index;
  }, {});
}

/**
 * Resources -> items, flattened into a slug-keyed dictionary.
 * No graph needed since resources aren't sequential.
 */
export function buildResourceIndex(resources) {
  const items = resources.flatMap((group) => group.items);
  return items.reduce((index, item) => {
    index[item.slug] = item;
    return index;
  }, {});
}