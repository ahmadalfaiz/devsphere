import styles from "./FeaturesSection.module.css";

function FeaturesSection() {

  const features = [

    {
      icon: "💻",
      title: "Interactive Learning",
      description:
        "Learn with practical coding exercises, real projects and hands-on tutorials."
    },

    {
      icon: "🚀",
      title: "Career Focused",
      description:
        "Master industry-ready skills that help you crack interviews and jobs."
    },

    {
      icon: "🧠",
      title: "AI Powered",
      description:
        "Get personalized recommendations and smarter learning paths."
    },

    {
      icon: "📚",
      title: "Premium Resources",
      description:
        "Access high-quality notes, articles, roadmaps and coding practice."
    }

  ];

  return (

    <section className={styles.featuresSection}>

      {/* TOP CONTENT */}

      <div className={styles.topContent}>

        <span>
          WHY CHOOSE US
        </span>

        <h2>
          Powerful Features For
          Modern Learners
        </h2>

        <p>
          Everything you need to learn,
          practice and grow your tech career
          in one platform.
        </p>

      </div>

      {/* FEATURE CARDS */}

      <div className={styles.featuresGrid}>

        {features.map((feature, index) => (

          <div
            className={styles.featureCard}
            key={index}
          >

            <div className={styles.icon}>
              {feature.icon}
            </div>

            <h3>
              {feature.title}
            </h3>

            <p>
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default FeaturesSection;