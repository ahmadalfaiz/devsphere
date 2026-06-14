import styles from "./LatestSection.module.css";

function LatestSection() {

  const articles = [

    {
      category: "JavaScript",
      title: "Top JavaScript Concepts Every Developer Must Know",
      description:
        "Master closures, promises, async-await, event loop and advanced JavaScript concepts.",
      author: "Faiz Ahmad",
      date: "12 min read",
      image: "https://images.pexels.com/photos/37800914/pexels-photo-37800914.png"
    },

    {
      category: "Artificial Intelligence",
      title: "How AI Is Changing Modern Web Development",
      description:
        "Explore how AI tools are transforming frontend, backend and developer workflows.",
      author: "Faiz Ahmad",
      date: "8 min read",
      image: "https://images.pexels.com/photos/37801000/pexels-photo-37801000.jpeg"
    },

    {
      category: "Career",
      title: "Complete Roadmap To Crack Product-Based Companies",
      description:
        "A structured roadmap covering DSA, projects, system design and interview preparation.",
      author: "Faiz Ahmad",
      date: "15 min read",
      image: "https://images.pexels.com/photos/37801118/pexels-photo-37801118.jpeg"
    }

  ];

  return (

    <section className={styles.latestSection}>

      {/* TOP CONTENT */}

      <div className={styles.topContent}>

        <span>
          LATEST ARTICLES
        </span>

        <h2>
          Fresh Insights & Tech Articles
        </h2>

        <p>
          Stay updated with modern technologies,
          development trends and career guidance.
        </p>

      </div>

      {/* ARTICLES GRID */}

      <div className={styles.articlesGrid}>

        {articles.map((article, index) => (

          <div
            className={styles.articleCard}
            key={index}
          >

            {/* IMAGE */}

            <div className={styles.imageSection}>
              
              <img
                src={article.image}
                alt={article.title}
                className={styles.articleImage}
              />

              <div className={styles.overlay}></div>

              <span className={styles.category}>
                {article.category}
              </span>

            </div>

            {/* CONTENT */}

            <div className={styles.content}>

              <h3>
                {article.title}
              </h3>

              <p>
                {article.description}
              </p>

              {/* META */}

              <div className={styles.metaData}>

                <span>
                  ✍ {article.author}
                </span>

                <span>
                  ⏱ {article.date}
                </span>

              </div>

              <button>
                Read Article →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default LatestSection;