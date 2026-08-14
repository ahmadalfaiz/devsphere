import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import { tutorials } from "../../data/tutorialsData";
import lessonRegistry from "../../registry/lessonRegistry";
import contentRegistry from "../../content/contentRegistry";
import { setSEO } from "../../utils/seo";

import styles from "./Tutorials.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function TutorialLesson() {

  const {
    slug,
    lessonSlug,
  } = useParams();

  /* Added on 15th Aug new part for unique title for each lesson */
  useEffect(() => {
    const currentTutorial = lessonRegistry?.[slug];

    if (!currentTutorial) {
      setSEO({
        title: "Tutorial Not Found - DevSphere",
        description: "The requested DevSphere tutorial could not be found.",
        url: `/tutorials/${slug || ""}`,
      });

      return;
    }

    const currentLesson =
      currentTutorial.lessonIndex?.[lessonSlug] ||
      currentTutorial.resourceIndex?.[lessonSlug];

    if (!currentLesson) {
      setSEO({
        title: "Lesson Not Found - DevSphere",
        description: "The requested DevSphere lesson could not be found.",
        url: `/tutorials/${slug}/${lessonSlug || ""}`,
      });

      return;
    }

    setSEO({
      title:
        currentLesson.seo?.title ||
        `${currentLesson.title} - DevSphere ${currentTutorial.info.shortTitle} Tutorial`,

      description:
        currentLesson.seo?.description ||
        currentLesson.description ||
        currentTutorial.info.description,

      keywords:
        currentLesson.seo?.keywords ||
        [...new Set([
          currentLesson.title,
          ...(currentLesson.tags || [])
        ])],

      url: `/tutorials/${slug}/${lessonSlug}`,
    });
  }, [slug, lessonSlug]);
  /* up to this */

  const tutorial =
    lessonRegistry?.[slug]; //tutorials[slug];

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
    ...Object.values(tutorial.lessonIndex),
 
    ...Object.values(tutorial.resourceIndex)
    /*...tutorial.lessons.flatMap(
      section => section.topics
    ),

    ...(tutorial.resources?.topics || [])*/
  ].sort((a,b)=>a.id-b.id);

  const currentLesson =
    tutorial.lessonIndex[lessonSlug] ||
    tutorial.resourceIndex[lessonSlug];
  /*allLessons.find(
    item =>
      item.slug === lessonSlug
  );*/

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

  /* Is this lesson helpful?  State here */
  const [helpfulVote, setHelpfulVote] = useState(null);
  const [feedbackReason, setFeedbackReason] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleHelpfulVote = (vote) => {
    setHelpfulVote(vote);
  };

  const handleNegativeFeedback = () => {
    if (!feedbackReason) return;

    // TODO:
    // send feedback to backend

    setFeedbackSubmitted(true);
  };
  /* Upto this state of helpful is */

  /* Suggestion grid State here */
  const [suggestion, setSuggestion] = useState("");
  const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);

  const handleSuggestionSubmit = () => {

      if (!suggestion.trim()) return;

      // TODO:
      /*await submitSuggestion({
          lessonSlug: lesson.slug,
          suggestion
      });*/
      // API call later

      setSuggestionSubmitted(true);

  };
  /* Suggestion grid State upto this */

  /* Report grid State here */
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportReason, setReportReason] = useState("");
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [otherIssue, setOtherIssue] = useState("");

  const openReportModal = () => {
      setReportModalOpen(true);
      setReportReason("");
      setReportSubmitted(false);
  };

  const closeReportModal = () => {
      setReportModalOpen(false);
      setReportReason("");
      setReportSubmitted(false);
  };

  const handleReportSubmit = () => {
      if (!reportReason) return;

      if (
          reportReason === "Other" &&
          !otherIssue.trim()
      ) {
          return;
      }

      // TODO:
      /* await reportIssue({
          lessonSlug: lesson.slug,
          reason: reportReason,
          details: otherIssue
      }); */
      // send report to backend

      setReportSubmitted(true);
      setTimeout(() => {
          closeReportModal();
      }, 1800);
  };
  /* report grid upto this */

  /* Share lesson state starts here */
  const [linkCopied, setLinkCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopyLessonLink = async () => {
    try {
      const lessonUrl = window.location.href;

      await navigator.clipboard.writeText(lessonUrl);

      setCopyError(false);
      setLinkCopied(true);

      setTimeout(() => {
        setLinkCopied(false);
      }, 2500);

    } catch (error) {
      console.error(error);
      setCopyError(true);

      setTimeout(() => {
        setCopyError(false);
      }, 3000);
    }
  };
  /* Share lesson state upto this */

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
                  {tutorial.info.title} 
                </h2>

                <p>
                  {
                    Object.keys(tutorial.lessonIndex).length //allLessons.length
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
                tutorial.sections.map( //tutorial.lessons.map
                  (section, index) => (

                    <div
                      key={section.id} //270:key={section.section} 281:section.section
                    >

                      <div
                        className={styles.sectionTitle}
                        onClick={() =>
                          toggleSection(index)
                        }
                      >

                        <span>
                          {section.title}
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
                              section.lessons.map( //section.topics.map
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
                  key={section.id} //406:key={section.section} 419:{section.section}
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
                      {section.title}
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
                          section.items.map( //section.topics.map
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

                {tutorial.info.title}

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

          {/* LESSON META */}

          <div className={styles.lessonMeta}>

            {/* Row 1 */}
            <div className={styles.metaRow}>

              <span
                className={`${styles.statusBadge} ${
                  styles[currentLesson.status
                    ?.toLowerCase()
                    ?.replace(/\s+/g, "")]
                }`}
              >
                <span className={styles.statusDot}></span>

                {currentLesson.status}
              </span>

              <span className={styles.metaDivider}>•</span>

              <span className={styles.metaItem}>
                {currentLesson.difficulty}
              </span>

              <span className={styles.metaDivider}>•</span>

              <span className={styles.metaItem}>
                ⏱ {currentLesson.readingTime} min read
              </span>

            </div>

            {/* Row 2 */}

            <div className={styles.metaRow}>

              <span className={styles.metaItem}>
                👤 {tutorial.info.author?.name}
              </span>

              <span className={styles.metaDivider}>•</span>

              <span className={styles.metaItem}>
                🕒 Updated {currentLesson.updatedAt || tutorial.info.updatedAt}
              </span>

            </div>

          </div>

          {/* Lesson Meta */}
          <div className={styles.lessonHeroTags}>

            {currentLesson.tags?.map(tag => (

              <span
                key={tag}
                className={styles.heroTag}
              >
                {tag}
              </span>

            ))}

          </div>

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

                  </div>

                )
              )
            }

          </div>

          {/* CODE BLOCK */}


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

        {/* Lesson Recommendations and Tags */}
        <div className={styles.lessonExtras}>

          {/* Tags */}

          <div className={styles.extraCard}>

            <h3>🏷 Tags</h3>

            <div className={styles.tagContainer}>

              {currentLesson.tags?.map(tag => (

                <span
                  key={tag}
                  className={styles.tag}
                >
                  #{tag}
                </span>

              ))}

            </div>

          </div>


          {/* Recommended */}

          {
            currentLesson.graph?.recommended?.length > 0 && (

              <div className={styles.extraCard}>

                <h3>
                  📚 Recommended Reading
                </h3>

                <div className={styles.linkList}>

                  {
                    currentLesson.graph.recommended.map(recommendedSlug => {

                      const lesson =
                        tutorial.lessonIndex[recommendedSlug];
                        /*allLessons.find(
                          l => l.slug === slug
                        );*/

                      if (!lesson) return null;

                      return (

                        <Link
                          key={recommendedSlug}
                          to={`/tutorials/${slug}/${lesson.slug}`}
                          className={styles.extraLink}
                        >

                          {lesson.title}

                        </Link>

                      );

                    })
                  }

                </div>

              </div>

            )

          }


          {/* Related */}

          {
            currentLesson.graph?.related?.length > 0 && (

              <div className={styles.extraCard}>

                <h3>
                  🔗 Related Lessons
                </h3>

                <div className={styles.linkList}>

                  {
                    currentLesson.graph.related.map(relatedSlug => {

                      const lesson =
                        tutorial.lessonIndex[relatedSlug];
                        /*allLessons.find(
                          l => l.slug === slug
                        );*/

                      if (!lesson) return null;

                      return (

                        <Link
                          key={relatedSlug}
                          to={`/tutorials/${slug}/${lesson.slug}`}
                          className={styles.extraLink}
                        >

                          {lesson.title}

                        </Link>

                      );

                    })
                  }

                </div>

              </div>

            )

          }

        </div>

        {/* ==========================
            Lesson Footer
        ========================== */}

        <div className={styles.lessonFooter}>

          <h2 className={styles.lessonFooterTitle}>
            Help Improve DevSphere
          </h2>

          <p className={styles.lessonFooterSubtitle}>
            We read every piece of feedback. Help us make this tutorial better for future learners.
          </p>

          <div className={styles.lessonFooterGrid}>

            {/* Helpful */}

            <div className={styles.footerCard}>

              <h3>Was this lesson helpful?</h3>

              <p>
                Let us know whether this lesson helped you understand the topic.
              </p>

              {/* Initial buttons */}

              {helpfulVote === null && (

                <div className={styles.helpfulButtons}>

                  <button
                    className={styles.footerButton}
                    onClick={() => handleHelpfulVote("yes")}
                  >
                    Yes
                  </button>

                  <button
                    className={styles.footerButtonSecondary}
                    onClick={() => handleHelpfulVote("no")}
                  >
                    No
                  </button>

                </div>

              )}

              {/* YES */}

              {helpfulVote === "yes" && (

                <div className={styles.feedbackSuccess}>

                  <div className={styles.successIcon}>
                    ✓
                  </div>

                  <h4>Thank you for your feedback!</h4>

                  <p>
                    We're happy this lesson was helpful. Your feedback helps us
                    continue creating high-quality tutorials.
                  </p>

                </div>

              )}

              {/* NO */}

              {helpfulVote === "no" && !feedbackSubmitted && (

                <div className={styles.feedbackReason}>

                  <h4>Help us improve</h4>

                  <p>
                    What was the biggest issue with this lesson?
                  </p>

                  <label className={styles.radioOption}>

                    <input
                      type="radio"
                      name="lesson-feedback"
                      value="difficult"
                      checked={feedbackReason === "difficult"}
                      onChange={(e) =>
                        setFeedbackReason(e.target.value)
                      }
                    />

                    <span>Too difficult to understand</span>

                  </label>

                  <label className={styles.radioOption}>

                    <input
                      type="radio"
                      name="lesson-feedback"
                      value="basic"
                      checked={feedbackReason === "basic"}
                      onChange={(e) =>
                        setFeedbackReason(e.target.value)
                      }
                    />

                    <span>Too basic</span>

                  </label>

                  <label className={styles.radioOption}>

                    <input
                      type="radio"
                      name="lesson-feedback"
                      value="examples"
                      checked={feedbackReason === "examples"}
                      onChange={(e) =>
                        setFeedbackReason(e.target.value)
                      }
                    />

                    <span>Needs more practical examples</span>

                  </label>

                  <label className={styles.radioOption}>

                    <input
                      type="radio"
                      name="lesson-feedback"
                      value="outdated"
                      checked={feedbackReason === "outdated"}
                      onChange={(e) =>
                        setFeedbackReason(e.target.value)
                      }
                    />

                    <span>Outdated or incorrect information</span>

                  </label>

                  <label className={styles.radioOption}>

                    <input
                      type="radio"
                      name="lesson-feedback"
                      value="other"
                      checked={feedbackReason === "other"}
                      onChange={(e) =>
                        setFeedbackReason(e.target.value)
                      }
                    />

                    <span>Other</span>

                  </label>

                  <button
                    className={styles.submitFeedbackButton}
                    disabled={!feedbackReason}
                    onClick={handleNegativeFeedback}
                  >
                    Submit Feedback
                  </button>

                </div>

              )}

              {/* Submitted */}

              {feedbackSubmitted && (

                <div className={styles.feedbackSuccess}>

                  <div className={styles.successIcon}>
                    ✓
                  </div>

                  <h4>Thank you!</h4>

                  <p>
                    Your feedback has been recorded and will help us improve this
                    lesson for future learners.
                  </p>

                </div>

              )}

            </div>

            {/* Suggest */}

            <div className={styles.footerCard}>

                <h3>Suggest an Improvement</h3>

                <p>
                  Have an idea to make this lesson better? We'd love to hear it.
                </p>

                {!suggestionSubmitted ? (

                    <>

                        <textarea
                            className={styles.suggestionBox}
                            placeholder="Share your suggestion..."
                            value={suggestion}
                            maxLength={500}
                            onChange={(e) =>
                                setSuggestion(e.target.value)
                            }
                        />

                        <div className={styles.suggestionFooter}>

                            <span className={styles.characterCount}>
                                {suggestion.length}/500
                                {suggestion.length < 10 && " • Minimum 10 characters"}
                            </span>

                            <button
                                className={styles.footerButton}
                                disabled={!suggestion.trim()}
                                onClick={handleSuggestionSubmit}
                            >
                                Submit Suggestion
                            </button>

                        </div>

                    </>

                ) : (

                    <div className={styles.feedbackSuccess}>

                        <div className={styles.successIcon}>
                            ✓
                        </div>

                        <h4>Thank you!</h4>

                        <p>
                            Your suggestion has been submitted successfully.
                        </p>

                        <small>
                            We review every suggestion carefully to continuously improve DevSphere tutorials.
                        </small>

                    </div>

                )}

            </div>

            {/* Report */}

            <div className={styles.footerCard}>

              <h3>Report an Issue</h3>

              <p>
                Found outdated information, a typo, or something incorrect?
              </p>

              <button className={styles.footerButton} onClick={openReportModal}>
                Report Issue
              </button>

            </div>

            {/* Share */}

            <div className={styles.footerCard}>
                <h3>Share this Lesson</h3>
                {!linkCopied && !copyError && (
                    <>
                        <p>
                            Copy this lesson's link and share it with friends,
                            classmates, or teammates.
                        </p>

                        <button
                            className={styles.footerButton}
                            onClick={handleCopyLessonLink}
                        >
                            Copy Lesson Link
                        </button>
                    </>
                )}

                {linkCopied && (
                    <div className={styles.feedbackSuccess}>
                        <div className={styles.successIcon}>
                            ✓
                        </div>
                        <p>
                            Link Copied!
                        </p>
                        <small>
                            The lesson URL has been copied to your clipboard.
                        </small>
                    </div>
                )}

                {copyError && (
                    <div className={styles.feedbackError}>
                        <p>
                            Unable to copy the lesson link.
                        </p>

                        <small>
                            Please copy the URL manually from your browser.
                        </small>
                    </div>
                )}
            </div>

          </div>

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

      {/* Report Modal Starts here */}

      {
      reportModalOpen && (

      <div className={styles.modalOverlay}>

          <div className={styles.reportModal}>

              <button
                  className={styles.closeModal}
                  onClick={closeReportModal}
              >
                  ×
              </button>

              {
                  !reportSubmitted ? (
                      <>
                          <div className={styles.reportModalHeader}>
                            <h2>
                                Report an Issue
                            </h2>

                            <p>
                                Help us improve this lesson by selecting
                                the issue you encountered.
                            </p>
                          </div>

                          <div className={styles.reportModalBody}>
                            <div className={styles.reportOptions}>
                                {
                                    [
                                        "Incorrect information",
                                        "Typographical or grammar mistake",
                                        "Code example doesn't work",
                                        "Broken image or media",
                                        "Broken link",
                                        "Missing explanation",
                                        "Other"
                                    ].map((option) => (

                                        <label
                                            key={option}
                                            className={styles.radioOption}
                                        >

                                            <input
                                                type="radio"
                                                value={option}
                                                checked={
                                                    reportReason === option
                                                }

                                                onChange={(e)=>
                                                    setReportReason(
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <span>
                                                {option}
                                            </span>

                                        </label>
                                    ))
                                }

                            </div>
                          </div>

                          {
                              reportReason === "Other" && (
                                  <div className={styles.otherIssueContainer}>
                                      <label
                                          className={styles.otherIssueLabel}
                                      >
                                          Please describe the issue
                                      </label>

                                      <textarea
                                          className={styles.otherIssueBox}
                                          placeholder="Tell us what issue you found..."
                                          maxLength={500}
                                          value={otherIssue}
                                          onChange={(e) =>
                                              setOtherIssue(e.target.value)
                                          }
                                      />

                                      <div className={styles.otherIssueFooter}>
                                          <span>
                                              {otherIssue.length}/500
                                          </span>
                                      </div>
                                  </div>
                              )
                          }

                          <div className={styles.reportModalFooter}>
                            <div className={styles.modalButtons}>

                              <button
                                  className={styles.cancelButton}
                                  onClick={closeReportModal}
                              >
                                  Cancel
                              </button>

                              <button
                                  className={styles.footerButton}
                                  disabled={!reportReason || (reportReason === "Other" && otherIssue.trim().length < 10)}
                                  onClick={handleReportSubmit}
                              >
                                  Submit Report
                              </button>
                            </div>
                          </div>
                      </>
                  ) : (
                      <div className={styles.feedbackSuccess}>
                          <div className={styles.successIcon}>
                              ✓
                          </div>

                          <h3>
                              Report Submitted
                          </h3>

                          <p>
                              Thank you for helping improve DevSphere.
                          </p>

                          <small>
                              This window will close automatically...
                          </small>

                      </div>
                  )
              }
          </div>
      </div>
      )
      }

    </main>
    

  );

}

export default TutorialLesson;