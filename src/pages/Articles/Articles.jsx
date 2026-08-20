import React from "react";
import { Link } from "react-router-dom";
import articles from "../../data/articlesData";
import styles from "./Articles.module.css";

const Articles = () => {
  /*
   * Articles are expected to come from articlesData.js.
   *
   * Recommended article object structure:
   *
   * {
   *   id: "top-javascript-concepts",
   *   slug: "top-javascript-concepts-every-developer-must-know",
   *   title: "Top JavaScript Concepts Every Developer Must Know",
   *   description: "...",
   *   category: "JavaScript",
   *   date: "August 18, 2026",
   *   readTime: "8 min read",
   *   image: "/images/articles/javascript-concepts.jpg"
   * }
   *
   * The newest articles should have the newest dates in articlesData.js.
   */

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <main className={styles.articlesPage}>
      {/* =========================================
          ARTICLES HEADER
      ========================================== */}
      <section className={styles.articlesHeader}>
        <h1 className={styles.articlesTitle}>
          Articles
        </h1>

        <p className={styles.articlesSubtitle}>
          Explore insights, guides, and practical knowledge for modern developers.
        </p>
      </section>

      {/* =========================================
          ARTICLES SECTION
      ========================================== */}
      <section className={styles.articlesSection}>

        {/* =========================================
            ARTICLES GRID
        ========================================== */}
        <div className={styles.articlesGrid}>
          {sortedArticles.map((article) => (
            <article
              className={styles.articleCard}
              key={article.id || article.slug}
            >
              {/* =====================================
                  ARTICLE IMAGE
              ====================================== */}
              <Link
                to={`/articles/${article.slug}`}
                className={styles.articleImageLink}
                aria-label={`Read ${article.title}`}
              >
                <div className={styles.articleImageWrapper}>
                  <img
                    src={article.image}
                    alt={article.imageAlt || article.title}
                    className={styles.articleImage}
                    loading="lazy"
                  />

                  <div className={styles.imageOverlay} />
                </div>
              </Link>

              {/* =====================================
                  ARTICLE CONTENT
              ====================================== */}
              <div className={styles.articleContent}>
                {/* Category */}
                {article.category && (
                  <div className={styles.articleCategory}>
                    {article.category}
                  </div>
                )}

                {/* Title */}
                <h3 className={styles.articleTitle}>
                  <Link to={`/articles/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Description */}
                {article.description && (
                  <p className={styles.articleDescription}>
                    {article.description}
                  </p>
                )}

                {/* =================================
                    ARTICLE META
                ================================== */}
                <div className={styles.articleMeta}>
                  {article.date && (
                    <span className={styles.articleDate}>
                      {article.date}
                    </span>
                  )}

                  {article.date && article.readTime && (
                    <span className={styles.metaSeparator}>•</span>
                  )}

                  {article.readTime && (
                    <span className={styles.articleReadTime}>
                      {article.readTime}
                    </span>
                  )}
                </div>

                {/* =================================
                    READ ARTICLE
                ================================== */}
                <Link
                  to={`/articles/${article.slug}`}
                  className={styles.readArticle}
                >
                  <span>Read Article</span>

                  <span
                    className={styles.readArrow}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================
            EMPTY STATE
        ========================================== */}
        {sortedArticles.length === 0 && (
          <div className={styles.emptyState}>
            <h3>No articles available</h3>

            <p>
              New articles will appear here soon. Check back later.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Articles;