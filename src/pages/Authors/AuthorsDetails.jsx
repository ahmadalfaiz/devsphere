import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { authors } from "../../data/authors";
import articlesData from "../../data/articlesData";
import styles from "./Authors.module.css";
import { setSEO } from "../../utils/seo";

const AuthorsDetails = () => {
  const { slug } = useParams();

  const author = Object.values(authors).find(
    (item) => item.slug === slug
  );

  const authorArticles = author
    ? articlesData.filter(
        (article) => article.author === author.name)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];

  useEffect(() => {
    if (!author) return;

    setSEO({
      title: `${author.name} | DevSphere`,
      description: author.bio,
      url: `/authors/${author.slug}`,
    });
  }, [author]);

  if (!author) {
    return (
      <main className={styles.authorsPage}>
        <section className={styles.authorNotFound}>
          <div className={styles.container}>
            <div className={styles.notFoundContent}>
              <span className={styles.sectionLabel}>
                AUTHOR PROFILE
              </span>

              <h1>Author Not Found</h1>

              <p>
                The author profile you are looking for does not
                exist or may have been moved.
              </p>

              <Link
                to="/authors"
                className={styles.profileButton}
              >
                <span aria-hidden="true">←</span>
                Back to Authors
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.authorsPage}>
      {/* =====================================================
          AUTHOR PROFILE HERO
      ====================================================== */}

      <section className={styles.authorProfileHero}>
        <div className={styles.profileHeroGlow}></div>
        <div className={styles.profileHeroGlowSecondary}></div>

        <div className={styles.container}>
          <Link
            to="/authors"
            className={styles.backToAuthors}
          >
            ← Back to Authors
          </Link>

          <div className={styles.authorProfileCard}>
            <div className={styles.profileAvatarWrapper}>
              <img
                src={author.avatar}
                alt={`${author.name} - ${author.role}`}
                className={styles.profileAvatar}
              />
            </div>

            <div className={styles.profileInfo}>
              <span className={styles.profileEyebrow}>
                DEVSPHERE AUTHOR
              </span>

              <h1>{author.name}</h1>

              <p className={styles.profileRole}>
                {author.role}
              </p>

              <p className={styles.profileBio}>
                {author.bio}
              </p>

              <div className={styles.profileMeta}>
                <div className={styles.profileStat}>
                  <strong>{authorArticles.length}</strong>
                  <span>
                    {authorArticles.length === 1
                      ? "Article"
                      : "Articles"}
                  </span>
                </div>

                <div className={styles.profileDivider}></div>

                <span className={styles.profileMetaText}>
                  Publishing on DevSphere
                </span>
              </div>

              <div className={styles.profileSocials}>
                {author.social.github && (
                  <a
                    href={author.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.profileSocialLink}
                  >
                    GitHub
                  </a>
                )}

                {author.social.linkedin && (
                  <a
                    href={author.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.profileSocialLink}
                  >
                    LinkedIn
                  </a>
                )}

                {author.social.instagram && (
                  <a
                    href={author.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.profileSocialLink}
                  >
                    Instagram
                  </a>
                )}

                {author.social.twitter && (
                  <a
                    href={author.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.profileSocialLink}
                  >
                    X
                  </a>
                )}

                {author.social.website && (
                  <a
                    href={author.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.profileSocialLink}
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AUTHOR ARTICLES
      ====================================================== */}

      <section className={styles.authorArticlesSection}>
        <div className={styles.container}>
          <div className={styles.authorArticlesHeader}>
            <div>
              <span className={styles.sectionLabel}>
                WRITTEN BY {author.name.toUpperCase()}
              </span>

              <h2>
                Articles by {author.name}
              </h2>

              <p>
                Explore the technical articles and learning
                resources written by {author.name}.
              </p>
            </div>

            <span className={styles.authorArticleCount}>
              {authorArticles.length}{" "}
              {authorArticles.length === 1
                ? "Article"
                : "Articles"}
            </span>
          </div>

          {authorArticles.length > 0 ? (
            <div className={styles.authorArticlesGrid}>
              {authorArticles.map((article) => (
                <article
                  key={article.id}
                  className={styles.authorArticleCard}
                >
                  <Link
                    to={`/articles/${article.slug}`}
                    className={styles.authorArticleImageLink}
                  >
                    <div className={styles.authorArticleImageWrapper}>
                      <img
                        src={article.image}
                        alt={
                          article.imageAlt || article.title
                        }
                        className={styles.authorArticleImage}
                      />

                      <span className={styles.articleCategoryBadge}>
                        {article.category}
                      </span>
                    </div>
                  </Link>

                  <div className={styles.authorArticleContent}>
                    <div className={styles.authorArticleMeta}>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3>
                      <Link
                        to={`/articles/${article.slug}`}
                      >
                        {article.title}
                      </Link>
                    </h3>

                    <p>
                      {article.description}
                    </p>

                    <Link
                      to={`/articles/${article.slug}`}
                      className={styles.readArticleLink}
                    >
                      Read Article
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.noArticles}>
              <h3>No articles yet</h3>

              <p>
                This author hasn't published any articles on
                DevSphere yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default AuthorsDetails;