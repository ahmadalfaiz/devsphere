import styles from "./Profile.module.css";

function AchievementShowcase({

  profileData,
}) {

  const milestones = [

    {
      label: "Courses Completed",
      value:
        profileData.coursesCompleted,
      icon: "📚",
    },

    {
      label: "Problems Solved",
      value:
        profileData.problemsSolved,
      icon: "💻",
    },

    {
      label: "Certificates Earned",
      value:
        profileData.certificates,
      icon: "🎓",
    },

    {
      label: "Followers",
      value:
        profileData.followers,
      icon: "⭐",
    },

  ];

  const achievements = [];

  if (
    profileData.coursesCompleted >= 1
  ) {
    achievements.push({
      icon: "🚀",
      title: "First Course",
      description:
        "Completed your first course",
      rarity: "Rare",
    });
  }

  if (
    profileData.coursesCompleted >= 10
  ) {
    achievements.push({
      icon: "🏆",
      title: "Course Finisher",
      description:
        "Completed 10+ courses",
      rarity: "Gold",
    });
  }

  if (
    profileData.learningStreak >= 7
  ) {
    achievements.push({
      icon: "🔥",
      title: "Consistency Starter",
      description:
        "Maintained a 7-day learning streak",
      rarity: "Rare",
    });
  }

  if (
    profileData.learningStreak >= 30
  ) {
    achievements.push({
      icon: "⚡",
      title: "Consistency King",
      description:
        "Maintained a 30-day learning streak",
      rarity: "Epic",
    });
  }

  if (
    profileData.problemsSolved >= 50
  ) {
    achievements.push({
      icon: "💻",
      title: "Problem Solver",
      description:
        "Solved 50+ coding problems",
      rarity: "Silver",
    });
  }

  if (
    profileData.problemsSolved >= 200
  ) {
    achievements.push({
      icon: "🧠",
      title: "Coding Master",
      description:
        "Solved 200+ coding problems",
      rarity: "Legendary",
    });
  }

  if (
    profileData.certificates >= 5
  ) {
    achievements.push({
      icon: "🎓",
      title: "Certified Developer",
      description:
        "Earned 5+ certificates",
      rarity: "Gold",
    });
  }

  if (
    profileData.followers >= 100
  ) {
    achievements.push({
      icon: "🌟",
      title: "Community Star",
      description:
        "Reached 100 followers",
      rarity: "Epic",
    });
  }

  return (

    <section
      className={
        styles.achievementSection
      }
    >

      {/* HEADER */}

      <div
        className={styles.sectionHeader}
      >

        <span
          className={styles.sectionTag}
        >
          Achievements
        </span>

        <h2>
          Achievement Showcase
        </h2>

        <p>
          Every milestone represents
          dedication, consistency and
          growth in your developer
          journey.
        </p>

      </div>

      {/* MILESTONES */}

      <div
        className={styles.milestoneGrid}
      >

        {
          milestones.map(
            (item) => (

              <div
                key={item.label}
                className={
                  styles.milestoneCard
                }
              >

                <div
                  className={
                    styles.milestoneIcon
                  }
                >
                  {item.icon}
                </div>

                <h3>
                  {item.value}
                </h3>

                <p>
                  {item.label}
                </p>

              </div>

            )
          )
        }

      </div>

      {/* ACHIEVEMENTS BADGES */}

      <div
        className={
          styles.achievementGrid
        }
      >

        {
          achievements.length > 0 ? (

            achievements.map(
              (
                achievement,
                index
              ) => (

                <div
                  key={index}
                  className={
                    styles.achievementCard
                  }
                >

                  <div
                    className={
                      styles.badgeGlow
                    }
                  ></div>

                  <div
                    className={
                      styles.badgeIcon
                    }
                  >
                    {
                      achievement.icon
                    }
                  </div>

                  <h3>
                    {
                      achievement.title
                    }
                  </h3>

                  <p>
                    {
                      achievement.description
                    }
                  </p>

                  <span
                    className={
                      styles.rarityBadge
                    }
                  >
                    {
                      achievement.rarity
                    }
                  </span>

                </div>

              )
            )

          ) : (

            <div
              className={
                styles.emptyLearning
              }
            >

              <h3>
                No Achievements Yet
              </h3>

              <p>
                Complete courses,
                solve problems and
                earn certificates to
                unlock achievements.
              </p>

            </div>

          )
        }

      </div>

    </section>

  );
}

export default AchievementShowcase;