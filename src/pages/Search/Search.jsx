import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { searchContent, normalizeScope } from "../../utils/searchIndex";
import { setSEO } from "../../utils/seo";
import styles from "./Search.module.css";

const PAGE_SIZE = 20;

const SCOPE_TABS = [
  { key: "all", label: "Everything" },
  { key: "tutorials", label: "Tutorials" },
  { key: "courses", label: "Courses" },
];

const TYPE_LABELS = {
  tutorial: "Tutorial",
  lesson: "Lesson",
  resource: "Resource",
};

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const trimmedQuery = query.trim();
  const scope = normalizeScope(searchParams.get("scope"));
  const isCourses = scope === "courses";

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Search result pages should not be indexed by search engines.
  useEffect(() => {
    setSEO({
      title: trimmedQuery
        ? `Search results for "${trimmedQuery}" | DevSphere`
        : "Search | DevSphere",
      description:
        "Search DevSphere tutorials, lessons, courses, articles and resources.",
      url: "/search",
      robots: "noindex, follow",
    });
  }, [trimmedQuery]);

  // Start from the first page whenever the search changes.
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [trimmedQuery, scope]);

  const results = useMemo(
    () => searchContent(trimmedQuery, scope),
    [trimmedQuery, scope]
  );

  const visibleResults = results.slice(0, visibleCount);

  const scopeUrl = (key) => {
    const params = new URLSearchParams();
    params.set("q", trimmedQuery);
    if (key !== "all") params.set("scope", key);
    return `/search?${params.toString()}`;
  };

  return (
    <main className={styles.searchPage}>
      <h1>Search DevSphere</h1>

      <p>
        {trimmedQuery
          ? `Search results for "${trimmedQuery}"`
          : "Search tutorials, courses, articles, and more."}
      </p>

      {!trimmedQuery && (
        <p>Enter a search term in the Navbar to get started.</p>
      )}

      {trimmedQuery && (
        <nav className={styles.scopeTabs} aria-label="Search scope">
          {SCOPE_TABS.map((tab) => (
            <Link
              key={tab.key}
              to={scopeUrl(tab.key)}
              className={`${styles.scopeTab} ${
                scope === tab.key ? styles.scopeTabActive : ""
              }`}
              aria-current={scope === tab.key ? "page" : undefined}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      )}

      {trimmedQuery && isCourses && (
        <div className={styles.notice} role="note">
          <strong>Course content is coming soon.</strong> DevSphere courses
          are still being prepared. In the meantime, here are related
          tutorials for your search.
        </div>
      )}

      {trimmedQuery && (
        <p className={styles.resultCount}>
          {results.length}{" "}
          {isCourses ? "related tutorial results" : "results"} found
        </p>
      )}

      {trimmedQuery && results.length === 0 && (
        <p>
          No matching results found. Try a different keyword, technology, or
          topic.
        </p>
      )}

      <div className={styles.resultsList}>
        {visibleResults.map((result) => (
          <article key={result.id} className={styles.resultCard}>
            <span className={styles.resultType}>
              {TYPE_LABELS[result.type] || "Result"}
            </span>

            <h2>
              <Link to={result.url}>{result.title}</Link>
            </h2>

            {result.description && <p>{result.description}</p>}

            {result.type !== "tutorial" && (
              <p className={styles.resultContext}>
                {result.techTitle}
                {result.readingTime
                  ? ` · ${result.readingTime} min read`
                  : ""}
              </p>
            )}
          </article>
        ))}
      </div>

      {visibleCount < results.length && (
        <button
          type="button"
          className={styles.showMore}
          onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
        >
          Show more ({results.length - visibleCount} remaining)
        </button>
      )}
    </main>
  );
}

export default Search;