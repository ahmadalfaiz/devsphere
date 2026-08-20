import { Link, useParams } from "react-router-dom";
import articlesData from "../../data/articlesData";
import styles from "./Articles.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const ArticlesDetails = () => {
  const { slug } = useParams();

  const article = articlesData.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return (
      <main className={styles.articlesPage}>
        <div className={styles.container}>
          <div className={styles.articleNotFound}>
            <h1>Article Not Found</h1>

            <p>
              The article you are looking for does not exist or may have
              been moved.
            </p>

            <Link
              to="/articles"
              className={styles.backToArticles}
            >
              ← Back to Articles
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.articleDetailsPage}>
      <article className={styles.articleDetails}>

        <Link
          to="/articles"
          className={styles.backToArticles}
        >
          ← Back to Articles
        </Link>

        <header className={styles.articleDetailsHeader}>

          <div className={styles.articleCategory}>
            {article.category}
          </div>

          <h1>{article.title}</h1>

          <p className={styles.articleDetailsDescription}>
            {article.description}
          </p>

          <div className={styles.articleDetailsMeta}>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

        </header>

        <div className={styles.articleContent}>

          <p className={styles.articleIntroduction}>
            {article.content.introduction}
          </p>

          <div className={styles.articleDetailsImageWrapper}>
            <img
              src={article.image}
              alt={article.imageAlt || article.title}
              className={styles.articleDetailsImage}
            />
          </div>

          {article.content.sections.map((section, index) => (
            <section
              className={styles.contentSection}
              key={`${article.id}-${index}`}
            >
              <h2>{section.heading}</h2>

              {section.paragraphs?.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>
                  {paragraph}
                </p>
              ))}

              {section.code && (
                <SyntaxHighlighter
                  language={section.language || "text"}
                  style={vscDarkPlus}
                  className={styles.articleCode}
                  customStyle={{
                    margin: "1.5rem 0",
                    padding: "1.25rem",
                    borderRadius: "12px",
                    fontSize: "0.95rem",
                    lineHeight: "1.7",
                    overflowX: "auto",
                  }}
                  wrapLongLines={false}
                >
                  {section.code}
                </SyntaxHighlighter>
              )}
            </section>
          ))}

        </div>

      </article>
    </main>
  );
};

export default ArticlesDetails;