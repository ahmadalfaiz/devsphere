import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { tutorials } from "../../data/tutorialsData";
import contentRegistry from "../../content/contentRegistry";

import styles from "./Tutorials.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function TutorialLesson() {

  const {
    slug,
    lessonSlug,
  } = useParams();

  const tutorial =
    tutorials[slug];

  const [resourceOpen, setResourceOpen] =
    useState(false);

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [
    resourcePanelOpen,
    setResourcePanelOpen
  ] = useState(false);

  const [resourceOpenSections,
    setResourceOpenSections] =
    useState([0]);

  if (!tutorial) {

    return (

      <div
        className={styles.notFound}
      >

        <h1>
          Tutorial Not Found
        </h1>

      </div>

    );

  }

  const allLessons =
  [
    ...tutorial.lessons.flatMap(
      section => section.topics
    ),

    ...(tutorial.resources?.topics || [])
  ];

  const currentLesson =
  allLessons.find(
    item =>
      item.slug === lessonSlug
  );

  /* Unique resource new part here --- */

  if (!currentLesson) {

    return (

      <div
        className={styles.notFound}
      >

        <h1>
          Lesson Not Found
        </h1>

      </div>

    );

  }

  /*const allLessons =
    tutorial.lessons.flatMap(
      section => section.topics
    );*/

  const currentIndex =
    allLessons.findIndex(
      lesson =>
        lesson.slug === lessonSlug
    );

  const previousLesson =
    currentIndex > 0
      ? allLessons[currentIndex - 1]
      : null;

  const nextLesson =
    currentIndex <
      allLessons.length - 1
        ? allLessons[currentIndex + 1]
        : null;

  const progress =
    Math.round(
      ((currentIndex + 1) /
        allLessons.length) * 100
    );

  const lessonContent =
    contentRegistry?.[slug]?.[lessonSlug];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyCode = async (code, index) => {

    try {

      await navigator.clipboard.writeText(code);

      setCopiedIndex(index);

      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);

    } catch (error) {

      console.error(error);

    }

  };

  const [openSections, setOpenSections] =
    useState([0]);

  const toggleSection = (index) => {

    if (openSections.includes(index)) {

      setOpenSections(
        openSections.filter(
          item => item !== index
        )
      );

    } else {

      setOpenSections([
        ...openSections,
        index
      ]);
    }
  };

  /*Resource toggle here*/
  const toggleResourceSection =
    (index) => {

      if (
        resourceOpenSections.includes(index)
      ) {

        setResourceOpenSections(
          resourceOpenSections.filter(
            item => item !== index
          )
        );

      }

      else {

        setResourceOpenSections([
          ...resourceOpenSections,
          index
        ]);

      }

  };

  return (

    <main
      className={styles.lessonPage}
    >

      {/* LEFT SIDEBAR */}

      <div className={styles.leftColumn}>
        <aside
          className={`
              ${styles.lessonSidebar}
              ${
              sidebarOpen
                  ? styles.sidebarOpen
                  : ""
              }
          `}
        >

          {/* Sidebar closing button */}
          <button
              className={styles.closeSidebar}
              onClick={() =>
                  setSidebarOpen(false)
              }
          >
              ✕
          </button>

          <div
            className={styles.sidebarTop}
          >

            <div className={styles.sidebarTitleRow}>

              <div>
                <h2>
                  {tutorial.title}
                </h2>

                <p>
                  {
                    allLessons.length
                  }
                  {" "}
                  Lessons
                </p>
              </div>

              <button
                className={styles.resourceBtn}
                onClick={() =>
                  setResourcePanelOpen(true)
                }
              >

                ⇶

              </button>

            </div>

          </div>

          <div
            className={styles.lessonNav}
          >

              {
                tutorial.lessons.map(
                  (section, index) => (

                    <div
                      key={section.section}
                    >

                      <div
                        className={styles.sectionTitle}
                        onClick={() =>
                          toggleSection(index)
                        }
                      >

                        <span>
                          {section.section}
                        </span>

                        <span>
                        {
                          openSections.includes(index)
                            ? "   -"
                            : "   +"
                        }
                      </span>
                        

                      </div>

                      {
                        openSections.includes(index) && (

                          <div
                            className={
                              styles.lessonGroup
                            }
                          >

                            {
                              section.topics.map(
                                (lesson) => (

                                  <Link
                                    key={lesson.id}
                                    to={
                                      `/tutorials/${slug}/${lesson.slug}`
                                    }
                                    className={
                                      lesson.slug === lessonSlug
                                        ? styles.activeLesson
                                        : styles.lessonLink
                                    }
                                  >

                                    {lesson.title}

                                  </Link>

                                )
                              )
                            }

                          </div>

                        )
                      }

                    </div>

                  )
                )
              }

          </div>

        </aside>

      </div>

      {/* Mobile overlay for sidebar */}

      {
        sidebarOpen && (

            <div
            className={styles.overlay}
            onClick={() =>
                setSidebarOpen(false)
            }
            />

        )
      }

      {/* Resource topics here */}
      <div
        className={`
          ${styles.resourcePanel}
          ${
            resourcePanelOpen
              ? styles.resourcePanelOpen
              : ""
          }
        `}
      >

        <button
          className={styles.closeResourceBtn}
          onClick={() =>
            setResourcePanelOpen(false)
          }
        >

          ✕

        </button>

        <div
          className={styles.sidebarTop}
        >

          <h2>
            DevSphere Resources
          </h2>

          <p>
            Special Learning
          </p>

        </div>

        <div
          className={styles.lessonNav}
        >

          {
            tutorial.resources?.map(
              (section, index) => (

                <div
                  key={section.section}
                >

                  <div
                    className={styles.sectionTitle}
                    onClick={() =>
                      toggleResourceSection(
                        index
                      )
                    }
                  >

                    <span>
                      {section.section}
                    </span>

                    <span>

                      {
                        resourceOpenSections.includes(
                          index
                        )
                          ? "   -"
                          : "   +"
                      }

                    </span>

                  </div>

                  {
                    resourceOpenSections.includes(
                      index
                    ) && (

                      <div
                        className={
                          styles.lessonGroup
                        }
                      >

                        {
                          section.topics.map(
                            (resource) => (

                              <Link
                                key={resource.id}
                                to={
                                  `/tutorials/${slug}/${resource.slug}`
                                }
                                className={
                                  lessonSlug ===
                                  resource.slug
                                    ? styles.activeLesson
                                    : styles.lessonLink
                                }
                              >

                                {resource.title}

                              </Link>

                            )
                          )
                        }

                      </div>

                    )
                  }

                </div>

              )
            )
          }

        </div>

      </div>

      {
        resourcePanelOpen && (

          <div
            className={
              styles.resourceOverlay
            }
            onClick={() =>
              setResourcePanelOpen(false)
            }
          />

        )
      }

      {/* MAIN CONTENT */}
      {/* toggleSection(index) */}

      <section
        className={styles.lessonContent}
      >

        {/* BREADCRUMB */}

        <div
        className={styles.breadcrumbWrapper}
        >
              <button
                  className={styles.mobileMenuBtn}
                  onClick={() =>
                  setSidebarOpen(true)
                  }
              >
                  ☰
              </button>

            <div
                className={styles.breadcrumb}
            >

                Tutorials

                <span>
                    /
                </span>

                {tutorial.title}

                <span>
                    /
                </span>

                {currentLesson.title}

            </div>
        </div>

        {/* HERO */}

        <div
          className={styles.lessonHero}
        >

          <span
            className={
              styles.lessonBadge
            }
          >
            Lesson
            {" "}
            {currentLesson.id}
          </span>

          <h1>
            {currentLesson.title}
          </h1>

          <p>
            Master the concepts,
            understand the theory,
            and build practical
            understanding through
            examples and exercises.
          </p>

        </div>

        {/* CONTENT */}

        <div
          className={
            styles.lessonArticle
          }
        >

          {/*<h2>
            {lessonContent?.title}
          </h2>*/}

          <div
            className={
              styles.lessonSections
            }
          >

            {
              lessonContent?.content?.map(
                (section, index) => (

                  <div
                    key={index}
                    className={styles.lessonSection}
                  >

                    {/*<h2>
                      {section.heading}
                    </h2>*/}

                    

    {section.heading && (
      <h2>{section.heading}</h2>
    )}

    {section.blocks?.map((block, blockIndex) => {

    switch (block.type) {

      /* Paragraph */
      case "paragraph":
        return (
          <p
            key={index}
            className={styles.paragraph}
          >
            {block.content}
          </p>
        );

      /* Quote */
      case "quote":
        return (
          <blockquote
            key={index}
            className={styles.quote}
          >
            {block.content}
          </blockquote>
        );

      /* Note */
      case "note":
        return (
          <div
            key={index}
            className={styles.note}
          >
            {block.content}
          </div>
        );

      /* Warning */
      case "warning":
        return (
          <div
            key={index}
            className={styles.warning}
          >
            {block.content}
          </div>
        );

      /* Tip */
      case "tip":
        return (
          <div
            key={index}
            className={styles.tip}
          >
            {block.content}
          </div>
        );

      /* List */
      case "list":
        return (
          <ul
            key={index}
            className={styles.pointsList}
          >
            {
              block.items?.map((item, i) => (
                <li key={i}>
                  {item}
                </li>
              ))
            }
          </ul>
        );

      /* Ordered List */
      case "orderedList":
        return (
          <ol
            key={index}
            className={styles.orderedList}
          >
            {
              block.items?.map((item, i) => (
                <li key={i}>
                  {item}
                </li>
              ))
            }
          </ol>
        );

      /* Code */
      case "code":
        return (
          <div
            key={index}
            className={styles.codeBlock}
          >

            <button
              className={styles.copyBtn}
              onClick={() =>
              copyCode(block.content, index)}
            >

              {
                copiedIndex === index
                  ? "✓"
                  : "📋"
              }

            </button>

            <SyntaxHighlighter
              language={block.language || "javascript"}
              style={oneDark}
              customStyle={{
                borderRadius: "16px",
                padding: "20px",
                fontSize: "0.95rem",
              }}
            >
              {block.content}
            </SyntaxHighlighter>

          </div>
        );

      /* Output */
      case "output":
        return (
          <div
            key={index}
            className={styles.outputBlock}
          >
            {Array.isArray(block.content)
              ? block.content.map((item, i) => (
                <div key={i}>{item}</div>
              ))
              : block.content}
          </div>
        );

      /* Table */
      case "table":
        return (
          <table
            key={index}
            className={styles.table}
          >
            <thead>
              <tr>
                {
                  block.headers?.map((header, i) => (
                    <th key={i}>
                      {header}
                    </th>
                  ))
                }
              </tr>
            </thead>

            <tbody>
              {
                block.rows?.map((row, i) => (
                  <tr key={i}>
                    {
                      row.map((cell, j) => (
                        <td key={j}>
                          {cell}
                        </td>
                      ))
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        );

      /* Comparison */
      case "comparison":
        return (
          <div
            key={index}
            className={styles.comparison}
          >

            <div>
              <h4>{block.leftTitle}</h4>

              <ul>
                {
                  block.leftItems?.map((item, i) => (
                    <li key={i}>
                      {item}
                    </li>
                  ))
                }
              </ul>
            </div>

            <div>
              <h4>{block.rightTitle}</h4>

              <ul>
                {
                  block.rightItems?.map((item, i) => (
                    <li key={i}>
                      {item}
                    </li>
                  ))
                }
              </ul>
            </div>

          </div>
        );

      /* Example */
      case "example":
        return (
          <div
            key={index}
            className={styles.example}
          >
            <h4>
              Example
            </h4>

              <ul
                key={index}
                className={styles.orderedList}
              >

                <p>
                  {
                    block.items?.map((items, i) => (
                      <li key={i}>
                        {items}
                      </li>
                    ))
                  }
                </p>
              </ul>
          </div>
        );

      /* Flow */
      case "flow":
        return (
          <div
            key={index}
            className={styles.flow}
          >
            {
              block.steps?.map((step, i) => (
                <div key={i}>
                  {step}
                </div>
              ))
            }
          </div>
        );

      /* Tree */
      case "tree":
        return (
          <pre
            key={index}
            className={styles.tree}
          >
            {block.content}
          </pre>
        );

      /* Cards */
      case "cards":
        return (
          <div
            key={index}
            className={styles.cardsGrid}
          >
            {
              block.items?.map((card, i) => (
                <div
                  key={i}
                  className={styles.card}
                >
                  <h4>
                    {card.title}
                  </h4>

                  <p>
                    {card.description}
                  </p>
                </div>
              ))
            }
          </div>
        );

      /* FAQ */
      case "faq":
        return (
          <div
            key={index}
            className={styles.faq}
          >
            {block.items?.map((faq, i) => (
              <details key={i}>
                <summary>
                  {faq.question}
                </summary>

                <p>
                  {faq.answer}
                </p>

                {faq.examples?.map((example, exampleIndex) => (
                  <div
                    key={exampleIndex}
                    className={styles.faqExample}
                  >
                    <h4>
                      {example.title}
                    </h4>

                    <SyntaxHighlighter
                      language={example.language || "javascript"}
                      style={oneDark}
                      customStyle={{
                        borderRadius: "12px",
                        padding: "16px",
                        fontSize: "0.9rem",
                      }}
                    >
                      {example.content}
                    </SyntaxHighlighter>
                  </div>
                ))}
              </details>
            ))}
          </div>
        );

      /* Image */
      case "image":
        return (
          <div
            key={index}
            className={styles.imageContainer}
          >
            <img
              key={index}
              src={block.src}
              alt={block.alt || block.caption || "Lesson Image"}
              className={styles.lessonImage}
            />

          

            {
              block.caption && (

                <p
                  className={styles.imageCaption}
                >
                  {block.caption}
                </p>

              )
            }

          </div>
        );

      {/*
                      section.image && (

                        <div
                          className={styles.imageContainer}
                        >

                          <img
                            src={section.image}
                            alt={section.imageCaption}
                            className={styles.lessonImage}
                          />

                          {
                            section.imageCaption && (

                              <p
                                className={
                                  styles.imageCaption
                                }
                              >

                                {section.imageCaption}

                              </p>

                            )
                          }

                        </div>

                      )
                    */}

      /* Video */
      case "video":
        return (
          <iframe
            key={index}
            src={block.src}
            title={block.title}
            className={styles.video}
          />
        );

      /* Divider */
      case "divider":
        return (
          <hr
            key={index}
            className={styles.divider}
          />
        );

      default:
        return null;

    }

  })
}

                    {/* Paragraphs */}
                    {/*
                      section.paragraphs?.map(
                        (text, i) => (
                          <p key={i}>
                            {text}
                          </p>
                        )
                      )
                    */}

                    {/* Points */}
                    {/*
                      section.points && (

                        <ul
                          className={styles.pointsList}
                        >

                          {
                            section.points.map(
                              (point, i) => (
                                <li key={i}>
                                  {point}
                                </li>
                              )
                            )
                          }

                        </ul>

                      )
                    */}

                    {/* afterpoints part */}
                    {/*
                      section.afterPoints?.map(
                        (text, i) => (
                          <p key={i}>
                            {text}
                          </p>
                        )
                      )
                    */}

                    {/* Paragraphs 2 */}
                    {/*
                      section.paragraphs2?.map(
                        (text, i) => (
                          <p key={i}>
                            {text}
                          </p>
                        )
                      )
                    */}

                    {/* Structure */}
                    {/*
                      section.structure && (

                        <div
                          className={styles.structureBox}
                        >

                          <h4>
                            Example Structure
                          </h4>

                          <pre>

                            {
                              section.structure.join("\n")
                            }

                          </pre>

                        </div>

                      )
                    */}

                    {/* Explanation */}
                    {/*
                      section.explanation && (

                        <div
                          className={styles.explanationBox}
                        >

                          <h4>
                            Explanation
                          </h4>

                          <p>
                            {section.explanation}
                          </p>

                        </div>

                      )
                    */}

                    {/* Examples */}
                    {/*
                      section.examples && (

                        <div
                          className={styles.exampleBox}
                        >

                          <h4>
                            Examples
                          </h4>

                          <ul>

                            {
                              section.examples.map(
                                (item, i) => (
                                  <li key={i}>
                                    {item}
                                  </li>
                                )
                              )
                            }

                          </ul>

                        </div>

                      )
                    */}

                    {/* Code Block */}
                    {/*
                      section.code && (
                        <div
                          className={styles.codeWrapper}
                        >

                          <button
                            className={styles.copyBtn}
                            onClick={() =>
                              copyCode(section.code.content)
                            }
                          >

                            {
                              copied
                                ? "✓ Copied"
                                : "📋 Copy"
                            }

                          </button>

                          <SyntaxHighlighter
                            language={section.code.language}
                            style={oneDark}
                            customStyle={{
                              borderRadius: "16px",
                              padding: "20px",
                              fontSize: "0.95rem",
                            }}
                          >

                            {section.code.content}

                          </SyntaxHighlighter>
                        </div>

                      )
                    */}

                    {/* Output */}
                    {/*
                      section.output && (

                        <div
                          className={styles.outputBox}
                        >

                          <strong>
                            Output:
                          </strong>

                          <p>
                            {section.output}
                          </p>

                        </div>

                      )
                    */}

                    {/* Note */}
                    {/*
                      section.note && (

                        <div
                          className={styles.noteBox}
                        >
                          {section.note}
                        </div>

                      )
                    */}

                    {/* Image */}
                    {/*
                      section.image && (

                        <div
                          className={styles.imageContainer}
                        >

                          <img
                            src={section.image}
                            alt={section.imageCaption}
                            className={styles.lessonImage}
                          />

                          {
                            section.imageCaption && (

                              <p
                                className={
                                  styles.imageCaption
                                }
                              >

                                {section.imageCaption}

                              </p>

                            )
                          }

                        </div>

                      )
                    */}

                    {/* Multiple images */}
                    {/*
                      section.images && (

                        <div
                          className={styles.imageGrid}
                        >

                          {
                            section.images.map(
                              (img, index) => (

                                <div key={index}>

                                  <img
                                    src={img.src}
                                    alt={img.caption}
                                    className={
                                      styles.lessonImage
                                    }
                                  />

                                  <p
                                    className={
                                      styles.imageCaption
                                    }
                                  >
                                    {img.caption}
                                  </p>

                                </div>

                              )
                            )
                          }

                        </div>

                      )
                    */}

                    {/* Table */}
                    {/*
                      section.table && (

                        <table
                          className={styles.lessonTable}
                        >

                          <thead>

                            <tr>

                              {
                                section.table.headers.map(
                                  (header) => (
                                    <th key={header}>
                                      {header}
                                    </th>
                                  )
                                )
                              }

                            </tr>

                          </thead>

                          <tbody>

                            {
                              section.table.rows.map(
                                (row, rowIndex) => (

                                  <tr key={rowIndex}>

                                    {
                                      row.map(
                                        (cell, cellIndex) => (

                                          <td
                                            key={cellIndex}
                                          >
                                            {cell}
                                          </td>

                                        )
                                      )
                                    }

                                  </tr>

                                )
                              )
                            }

                          </tbody>

                        </table>

                      )
                    */}

                    {/* Roadmap */}
                    {/*
                      section.roadmap && (

                        <div
                          className={styles.roadmapBox}
                        >

                          {
                            section.roadmap.map(
                              (item, i) => (
                                <div key={i}>
                                  {item}
                                </div>
                              )
                            )
                          }

                        </div>

                      )
                    */}

                    {/* Conclusion */}
                    {/*
                      section.conclusion && (

                        <div
                          className={styles.conclusionBox}
                        >

                          <h4>
                            Conclusion
                          </h4>

                          <p>
                            {section.conclusion}
                          </p>

                        </div>

                      )
                    */}

                  </div>

                )
              )
            }

          </div>

          {/* CODE BLOCK */}

          {/*<div
            className={
              styles.codeBlock
            }
          >

            <div
              className={
                styles.codeHeader
              }
            >
              Example
            </div>

            <pre>

{`function Welcome() {

  return (
    <h1>
      Hello React
    </h1>
  );

}`}

            </pre>

          </div>*/}

        </div>

        {/* PROGRESS */}

        <div
          className={
            styles.progressSection
          }
        >

          <div
            className={
              styles.progressHeader
            }
          >

            <span>
              Course Progress
            </span>

            <span>
              {progress}%
            </span>

          </div>

          <div
            className={
              styles.progressBar
            }
          >

            <div
              className={
                styles.progressFill
              }
              style={{
                width:
                  `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* NAVIGATION */}

        <div
          className={
            styles.lessonControls
          }
        >

          {

            previousLesson ? (

              <Link
                to={`/tutorials/${slug}/${previousLesson.slug}`}
                className={
                  styles.navButton
                }
              >

                ← Previous

              </Link>

            ) : (

              <div />

            )

          }

          {

            nextLesson ? (

              <Link
                to={`/tutorials/${slug}/${nextLesson.slug}`}
                className={
                  styles.navButton
                }
              >

                Next →

              </Link>

            ) : (

              <button
                className={
                  styles.completeButton
                }
              >

                Complete Course 🎉

              </button>

            )

          }

        </div>

      </section>

      {/* RIGHT PANEL */}

      <aside
        className={styles.rightPanel}
      >

        <div
          className={
            styles.rightCard
          }
        >

          <h3>
            💡 Quick Tips
          </h3>

          <p>

            Take notes while
            learning.

          </p>

          <p>

            Practice every
            concept after
            reading.

          </p>

          <p>

            Build mini-projects
            regularly.

          </p>

        </div>

        <div
          className={
            styles.rightCard
          }
        >

          <h3>
            📢 Ad Space
          </h3>

          <p>

            Reserved for future
            Google AdSense ads.

          </p>

        </div>

      </aside>

    </main>

  );

}

export default TutorialLesson;