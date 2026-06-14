import styles from "./TrendingSection.module.css";

function TrendingSection() {

  const trendingItems = [

    {
      category: "Web Development",
      title: "Complete React.js Roadmap For 2026",
      description:
        "Master React from fundamentals to advanced concepts with modern projects.",
      image:
        "https://cdn-icons-png.flaticon.com/512/919/919851.png"
    },

    {
      category: "Artificial Intelligence",
      title: "AI & Machine Learning Bootcamp",
      description:
        "Learn AI tools, machine learning and modern generative AI workflows.",
      image:
        "https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
    },

    {
      category: "Programming",
      title: "Master DSA For Placements",
      description:
        "Crack coding interviews with structured DSA preparation paths.",
      image:
        "https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
    }

  ];

  return (

    <section className={styles.trendingSection}>

      {/* TOP CONTENT */}

      <div className={styles.topContent}>

        <span>
          TRENDING NOW
        </span>

        <h2>
          Explore Popular Learning Paths
        </h2>

        <p>
          Discover the most trending courses,
          tutorials and career-focused tech skills.
        </p>

      </div>

      {/* TRENDING GRID */}

      <div className={styles.trendingGrid}>

        {trendingItems.map((item, index) => (

          <div
            className={styles.trendingCard}
            key={index}
          >

            {/* IMAGE */}

            <div className={styles.imageContainer}>

              <div className={styles.glow}></div>

              <img
                src={item.image}
                alt={item.title}
              />

            </div>

            {/* CONTENT */}

            <div className={styles.cardContent}>

              <span className={styles.category}>
                {item.category}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

              <button>
                Explore Now →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default TrendingSection;