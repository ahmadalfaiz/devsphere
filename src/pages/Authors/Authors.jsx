import { Link } from "react-router-dom";
import { useEffect } from "react";
import { authors } from "../../data/authors";
import articlesData from "../../data/articlesData";
import styles from "./Authors.module.css";
import { setSEO } from "../../utils/seo";

const Authors = () => {
  useEffect(() => {
    setSEO({
      title: "Authors | DevSphere",
      description:
        "Meet the authors behind DevSphere and explore their technical articles, insights, and learning resources.",
      url: "/authors",
    });
  }, []);

  const authorList = Object.values(authors);

  const getArticleCount = (author) => {
    return articlesData.filter(
      (article) => article.author === author.name
    ).length;
  };

  return (
    <main className={styles.authorsPage}>
      <section className={styles.authorsHero}>
        <div className={styles.heroGlow}></div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              THE PEOPLE BEHIND DEVSPHERE
            </span>

            <h1>
              Meet Our <span>Authors</span>
            </h1>

            <p>
              Discover the people creating practical, in-depth learning
              resources and technical insights at DevSphere.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.authorsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionLabel}>
                DEVSPHERE AUTHORS
              </span>

              <h2>People behind the content</h2>
            </div>

            <span className={styles.authorCount}>
              {authorList.length}{" "}
              {authorList.length === 1 ? "Author" : "Authors"}
            </span>
          </div>

          <div className={styles.authorsGrid}>
            {authorList.map((author) => {
              const articleCount = getArticleCount(author);

              return (
                <article
                  key={author.slug}
                  className={styles.authorCard}
                >
                  <div className={styles.cardGlow}></div>

                  <div className={styles.authorCardTop}>
                    <div className={styles.avatarWrapper}>
                      <img
                        src={author.avatar}
                        alt={`${author.name} - ${author.role}`}
                        className={styles.authorAvatar}
                      />
                    </div>

                    <div className={styles.authorIdentity}>
                      <h3>{author.name}</h3>

                      <p>{author.role}</p>
                    </div>
                  </div>

                  <p className={styles.authorBio}>
                    {author.bio}
                  </p>

                  <div className={styles.authorStats}>
                    <div className={styles.stat}>
                      <strong>{articleCount}</strong>
                      <span>
                        {articleCount === 1 ? "Article" : "Articles"}
                      </span>
                    </div>
                  </div>

                  <div className={styles.authorCardBottom}>
                    <div className={styles.socialLinks}>
                      {author.social.github && (
                        <a
                          href={author.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${author.name} on GitHub`}
                          className={styles.socialLink}
                        >
                          GitHub
                        </a>
                      )}

                      {author.social.linkedin && (
                        <a
                          href={author.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${author.name} on LinkedIn`}
                          className={styles.socialLink}
                        >
                          LinkedIn
                        </a>
                      )}

                      {author.social.instagram && (
                        <a
                          href={author.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${author.name} on Instagram`}
                          className={styles.socialLink}
                        >
                          Instagram
                        </a>
                      )}

                      {author.social.twitter && (
                        <a
                          href={author.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${author.name} on X`}
                          className={styles.socialLink}
                        >
                          X
                        </a>
                      )}

                      {author.social.website && (
                        <a
                          href={author.social.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${author.name}'s website`}
                          className={styles.socialLink}
                        >
                          Website
                        </a>
                      )}
                    </div>

                    <Link
                      to={`/authors/${author.slug}`}
                      className={styles.profileButton}
                    >
                      View Profile
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Authors;