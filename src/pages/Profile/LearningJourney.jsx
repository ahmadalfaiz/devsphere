import styles from "./Profile.module.css";

function LearningJourney({
  learningJourney = [],
}) {

  const getIcon = (
    technology
  ) => {

    switch (
      technology.toLowerCase()
    ) {

      case "react":
        return "⚛️";

      case "node.js":
        return "🟢";

      case "machine learning":
        return "🤖";

      case "system design":
        return "🏗️";

      case "javascript":
        return "🟨";

      case "python":
        return "🐍";

      case "java":
        return "☕";

      case "c++":
        return "💻";

      default:
        return "🚀";

    }

  };

  return (

    <section
      className={styles.learningJourney}
    >

      {/* SECTION HEADER */}

      <div
        className={styles.sectionHeader}
      >

        <span
          className={styles.sectionTag}
        >
          Learning Dashboard
        </span>

        <h2>
          Continue Your Journey
        </h2>

        <p>
          Track your ongoing courses,
          monitor progress, and keep
          building your developer
          skills.
        </p>

      </div>

      {/* COURSE GRID */}

      <div
        className={styles.learningGrid}
      >

        {
          learningJourney.length > 0 ? (

            learningJourney.map(
              (
                course,
                index
              ) => (

                <div
                  key={index}
                  className={
                    styles.courseCard
                  }
                >

                  <div
                    className={
                      styles.courseIcon
                    }
                  >
                    {
                      getIcon(
                        course.technology
                      )
                    }
                  </div>

                  <div
                    className={
                      styles.courseContent
                    }
                  >

                    <div
                      className={
                        styles.courseTop
                      }
                    >

                      <div>

                        <h3>
                          {
                            course.technology
                          }
                        </h3>

                        <span
                          className={
                            styles.courseCategory
                          }
                        >
                          {
                            course.status
                          }
                        </span>

                      </div>

                      <div
                        className={
                          styles.progressValue
                        }
                      >
                        {
                          course.progress
                        }
                        %
                      </div>

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
                            `${course.progress}%`,
                        }}
                      />

                    </div>

                    <div
                      className={
                        styles.courseStats
                      }
                    >

                      <span>
                        📈 Progress
                      </span>

                      <span>
                        {
                          course.status
                        }
                      </span>

                    </div>

                    <button
                      className={
                        styles.continueBtn
                      }
                    >
                      Continue Learning →
                    </button>

                  </div>

                </div>

              )
            )

          ) : (

            <div
              className={
                styles.emptyLearning
              }
            >

              <div className={styles.emptyIcon}>
                📚
              </div>

              <h3>
                No Learning Activity Yet
              </h3>

              <p>
                Start a course to
                begin your learning
                journey.
              </p>

            </div>

          )
        }

      </div>

    </section>

  );
}

export default LearningJourney;