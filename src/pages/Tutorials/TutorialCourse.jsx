import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { tutorials }
from "../../data/tutorialsData";

import styles from "./Tutorials.module.css";

function TutorialCourse() {

  const { slug } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [resourcePanelOpen, setResourcePanelOpen] =
    useState(false);

  const [resourceOpenSections,
    setResourceOpenSections] =
    useState([0]);

  const tutorial =
    tutorials[slug];

  if (!tutorial) {

    return (

      <div
        className={styles.notFound}
      >

        <h1>
          Tutorial Not Found
        </h1>

        <p>
          The requested tutorial
          does not exist.
        </p>

      </div>

    );

  }

  const [openSections, setOpenSections] =
    useState([0]);

  const toggleSection = (index) => {

    if (
      openSections.includes(index)
    ) {

      setOpenSections(
        openSections.filter(
          item => item !== index
        )
      );

    }

    else {

      setOpenSections([
        ...openSections,
        index,
      ]);

    }

  };

  /* Resource sidebar toggle button */
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
      className={styles.coursePage}
    >

      {/* LEFT SIDEBAR */}

      <div className={styles.leftColumn}>
        <aside
          className={`
            ${styles.courseSidebar}
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
            className={styles.sidebarHeader}
          >
            <div
              className={styles.sidebarTitleRow}
            >

              <div>
                <h2>
                  {tutorial.title}
                </h2>

                <p>
                  Course Contents
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
            className={styles.lessonList}
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
                                    styles.lessonLink
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

        {/* DevSphere Special resource here */}
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
                                  className={styles.lessonLink}
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

      </div>

      {/* Overlay for mobile sidebar */}

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

      {/* Mobile responsive sidebar toggle */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() =>
            setSidebarOpen(true)
          }
        >
          ☰
        </button>

      {/* CENTER CONTENT */}

      <section
        className={
          styles.courseContent
        }
      >

        <div
          className={
            styles.courseHero
          }
        >

          <span
            className={
              styles.detailsBadge
            }
          >
            {
              tutorial.category
            }
          </span>

          <h1>
            {tutorial.title}
          </h1>

          <p>
            {
              tutorial.description
            }
          </p>

        </div>

        <div
          className={
            styles.courseStats
          }
        >

          <div
            className={
              styles.courseStatCard
            }
          >

            <h3>
              {
                tutorial.lessons
                  .length
              }
            </h3>

            <p>
              Lessons
            </p>

          </div>

          <div
            className={
              styles.courseStatCard
            }
          >

            <h3>
              {
                tutorial.duration
              }
            </h3>

            <p>
              Duration
            </p>

          </div>

          <div
            className={
              styles.courseStatCard
            }
          >

            <h3>
              {
                tutorial.level
              }
            </h3>

            <p>
              Level
            </p>

          </div>

        </div>

        <div
          className={
            styles.courseOverview
          }
        >

          <h2>
            About This Course
          </h2>

          <p>

            This tutorial is
            designed to take you
            from beginner to
            advanced level through
            structured lessons,
            practical examples and
            hands-on learning.

          </p>

          <p>

            Follow the lessons
            from the sidebar and
            complete them one by
            one to track your
            learning progress on
            DevSphere.

          </p>

        </div>

        <div
          className={
            styles.startSection
          }
        >

          <button
            className={styles.startBtn}
            onClick={() =>
              navigate(
                `/tutorials/${slug}/${tutorial.lessons[0].topics[0].slug}`
              )
            }
          >

            Start Learning →

          </button>

        </div>

      </section>

      {/* RIGHT ADS */}

      <aside
        className={styles.adsPanel}
      >

        <div
          className={styles.adsCard}
        >

          <h3>
            Advertisement
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

export default TutorialCourse;