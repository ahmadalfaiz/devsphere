import styles from "./CategoriesSection.module.css";

function CategoriesSection() {

  const categories = [

    {
      icon: "💻",
      title: "Web Development",
      courses: "120+ Courses"
    },

    {
      icon: "🤖",
      title: "Artificial Intelligence",
      courses: "80+ Courses"
    },

    {
      icon: "📊",
      title: "Data Science",
      courses: "70+ Courses"
    },

    {
      icon: "🧠",
      title: "Machine Learning",
      courses: "95+ Courses"
    },

    {
      icon: "⚡",
      title: "DSA",
      courses: "150+ Problems"
    },

    {
      icon: "☁️",
      title: "Cloud & DevOps",
      courses: "60+ Courses"
    }

  ];

  return (

    <section className={styles.categoriesSection}>

      {/* TOP CONTENT */}

      <div className={styles.topContent}>

        <span>
          EXPLORE CATEGORIES
        </span>

        <h2>
          Choose Your Learning Path
        </h2>

        <p>
          Explore trending technologies and
          build future-ready skills through
          structured learning paths.
        </p>

      </div>

      {/* CATEGORY GRID */}

      <div className={styles.categoriesGrid}>

        {categories.map((category, index) => (

          <div
            className={styles.categoryCard}
            key={index}
          >

            <div className={styles.icon}>
              {category.icon}
            </div>

            <h3>
              {category.title}
            </h3>

            <p>
              {category.courses}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default CategoriesSection;