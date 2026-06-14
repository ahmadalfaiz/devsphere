import styles from "./Profile.module.css";

function RecentActivity() {

  const activities = [

    {
      id: 1,
      icon: "🎓",
      title: "Completed React Hooks Masterclass",
      description:
        "Successfully completed all lessons and earned a certificate.",
      time: "2 hours ago",
      type: "course",
    },

    {
      id: 2,
      icon: "💻",
      title: "Solved Binary Search Problem",
      description:
        "Completed a medium-level coding challenge in DSA Practice.",
      time: "Yesterday",
      type: "problem",
    },

    {
      id: 3,
      icon: "🏆",
      title: "Unlocked Consistency King Badge",
      description:
        "Maintained a 14-day learning streak.",
      time: "3 days ago",
      type: "achievement",
    },

    {
      id: 4,
      icon: "📚",
      title: "Started Machine Learning Path",
      description:
        "Enrolled in the AI & Data Science learning track.",
      time: "1 week ago",
      type: "learning",
    },

    {
      id: 5,
      icon: "⭐",
      title: "Received Community Upvotes",
      description:
        "Your answer helped fellow learners and received 25 upvotes.",
      time: "1 week ago",
      type: "community",
    },

  ];

  return (

    <section
      className={styles.activitySection}
    >

      {/* HEADER */}

      <div
        className={styles.sectionHeader}
      >

        <span
          className={styles.sectionTag}
        >
          Activity Feed
        </span>

        <h2>
          Recent Activity
        </h2>

        <p>
          Track your latest achievements,
          learning progress and community
          contributions across DevSphere.
        </p>

      </div>

      {/* TIMELINE */}

      <div
        className={styles.timeline}
      >

        {
          activities.map(
            (activity) => (

              <div
                key={activity.id}
                className={
                  styles.timelineItem
                }
              >

                {/* TIMELINE DOT */}

                <div
                  className={
                    styles.timelineDot
                  }
                >
                  {activity.icon}
                </div>

                {/* CONTENT */}

                <div
                  className={
                    styles.activityCard
                  }
                >

                  <div
                    className={
                      styles.activityTop
                    }
                  >

                    <h3>
                      {activity.title}
                    </h3>

                    <span
                      className={
                        styles.activityTime
                      }
                    >
                      {activity.time}
                    </span>

                  </div>

                  <p>
                    {
                      activity.description
                    }
                  </p>

                </div>

              </div>

            )
          )
        }

      </div>

      {/* ACTIVITY SUMMARY */}

      <div
        className={
          styles.activitySummary
        }
      >

        <div
          className={
            styles.summaryCard
          }
        >

          <h3>28</h3>

          <p>
            Activities This Month
          </p>

        </div>

        <div
          className={
            styles.summaryCard
          }
        >

          <h3>14</h3>

          <p>
            Current Streak
          </p>

        </div>

        <div
          className={
            styles.summaryCard
          }
        >

          <h3>95%</h3>

          <p>
            Weekly Consistency
          </p>

        </div>

      </div>

    </section>

  );
}

export default RecentActivity;