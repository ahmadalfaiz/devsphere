import { Link } from "react-router-dom";
import styles from "./Tutorials.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Tutorials() {

  const featuredTutorials = [

    {
      title: "React.js",
      icon: "⚛️",
      lessons: 120,
      level: "Beginner → Advanced",
      route: "/tutorials/react",
    },

    {
      title: "JavaScript",
      icon: "🟨",
      lessons: 95,
      level: "Beginner → Advanced",
      route: "/tutorials/javascript",
    },

    {
      title: "Python",
      icon: "🐍",
      lessons: 110,
      level: "Beginner → Advanced",
      route: "/tutorials/python",
    },

    {
      title: "Java",
      icon: "☕",
      lessons: 90,
      level: "Intermediate",
      route: "/tutorials/java",
    },

    {
      title: "C++",
      icon: "💻",
      lessons: 85,
      level: "Intermediate",
      route: "/tutorials/cpp",
    },

    {
      title: "Machine Learning",
      icon: "🤖",
      lessons: 130,
      level: "Advanced",
      route: "/tutorials/machine-learning",
    },

  ];

  const learningPaths = [

    {
      title: "Frontend Developer",
      description:
        "Master HTML, CSS, JavaScript, React and modern frontend tools.",
      icon: "🎨",
    },

    {
      title: "Backend Developer",
      description:
        "Learn Node.js, Express, APIs, Databases and Authentication.",
      icon: "⚙️",
    },

    {
      title: "Full Stack Developer",
      description:
        "Become job-ready by mastering frontend and backend development.",
      icon: "🚀",
    },

    {
      title: "AI Engineer",
      description:
        "Learn Python, Machine Learning, Deep Learning and AI systems.",
      icon: "🧠",
    },

  ];

    const categories = [
        {
            title: "🎨 Frontend",
            topics: [
            {name: "HTML", slug: "html",},
            {name: "CSS", slug: "css",},
            {name: "JavaScript", slug: "javascript",},
            {name: "React", slug: "react",},
            {name: "Next.js", slug: "nextjs",},
            ],
        },

        {
            title: "⚙️ Backend",
            topics: [
            {name: "Node.js", slug: "nodejs",},
            {name: "Express.js", slug: "expressjs",},
            {name: "REST APIs", slug: "rest-apis",},
            {name: "Authentication", slug: "authentication",},
            {name: "Microservices", slug: "microservices",},
            ],
        },

        {
            title: "💻 Programming",
            topics: [
            {name: "C", slug: "c",},
            {name: "C++", slug: "cpp",},
            {name: "Java", slug: "java",},
            {name: "Python", slug: "python",},
            {name: "JavaScript", slug: "javascript",},
            ],
        },

        {
            title: "🤖 AI & ML",
            topics: [
            {name: "Machine Learning", slug: "machine-learning",},
            {name: "Deep Learning", slug: "deep-learning",},
            {name: "NLP", slug: "nlp",},
            {name: "Computer Vision", slug: "computer-vision",},
            {name: "Generative AI", slug: "generative-ai",},
            ],
        },

        {
            title: "☁️ DevOps",
            topics: [
            {name: "Docker", slug: "docker",},
            {name: "Kubernetes", slug: "kubernetes",},
            {name: "CI/CD", slug: "ci-cd",},
            {name: "Linux", slug: "linux",},
            {name: "AWS", slug: "aws",},
            ],
        },

        {
            title: "🗄️ Databases",
            topics: [
            {name: "MySQL", slug: "mysql",},
            {name: "PostgreSQL", slug: "postgresql",},
            {name: "MongoDB", slug: "mongodb",},
            {name: "Redis", slug: "redis",},
            {name: "Database Design", slug: "database-design",},
            ],
        },
    ];

    const [openCategory, setOpenCategory] =
        useState(null);

    const navigate = useNavigate();

  return (

    <main className={styles.tutorialsPage}>

      {/* HERO SECTION */}

      <section className={styles.heroSection}>

        <div className={styles.heroContent}>

          <span className={styles.heroBadge}>
            🚀 DevSphere Learning Hub
          </span>

          <h1>
            Learn Skills That
            <span> Build Careers</span>
          </h1>

          <p>
            Master programming,
            development, AI, DSA and
            real-world technologies
            through structured tutorials.
          </p>

          <div className={styles.searchBox}>

            <input
              type="text"
              placeholder="Search tutorials..."
            />

          </div>

        </div>

      </section>

      {/* CATEGORIES */}

      <section className={styles.categorySection}>

        <div className={styles.sectionHeader}>

          <span>
            Explore Categories
          </span>

          <h2>
            Learn By Domain
          </h2>

        </div>

        <div className={styles.categoryGrid}>

            {categories.map(
                (category, index) => (

                <div
                    key={index}
                    className={styles.categoryWrapper}
                >

                    <div
                    className={styles.categoryCard}
                    onClick={() =>
                        setOpenCategory(
                        openCategory === index
                            ? null
                            : index
                        )
                    }
                    >
                    {category.title}
                    </div>

                    {
                    openCategory === index && (

                        <div
                        className={
                            styles.categoryDropdown
                        }
                        >

                        {
                            category.topics.map(
                            (topic) => (

                                <div
                                    key={topic.slug}
                                    className={styles.topicItem}
                                    onClick={() =>
                                        navigate(
                                        `/tutorials/${topic.slug}`
                                        )
                                    }
                                >
                                    {topic.name}
                                </div>
                            )
                            )
                        }
                        </div>
                    )
                    }
                </div>
                )
            )}
        </div>

      </section>

      {/* FEATURED TUTORIALS */}

      <section className={styles.featuredSection}>

        <div className={styles.sectionHeader}>

          <span>
            Featured Tutorials
          </span>

          <h2>
            Start Learning Today
          </h2>

        </div>

        <div className={styles.tutorialGrid}>

          {
            featuredTutorials.map(
              (tutorial) => (

                <div
                  key={tutorial.title}
                  className={styles.tutorialCard}
                >

                  <div className={styles.tutorialIcon}>
                    {tutorial.icon}
                  </div>

                  <h3>
                    {tutorial.title}
                  </h3>

                  <p>
                    {tutorial.lessons} Lessons
                  </p>

                  <span>
                    {tutorial.level}
                  </span>

                  <Link
                    to={tutorial.route}
                    className={styles.learnBtn}
                  >
                    Start Learning →
                  </Link>

                </div>

              )
            )
          }

        </div>

      </section>

      {/* LEARNING PATHS */}

      <section className={styles.pathSection}>

        <div className={styles.sectionHeader}>

          <span>
            Career Roadmaps
          </span>

          <h2>
            Structured Learning Paths
          </h2>

        </div>

        <div className={styles.pathGrid}>

          {
            learningPaths.map(
              (path) => (

                <div
                  key={path.title}
                  className={styles.pathCard}
                >

                  <div className={styles.pathIcon}>
                    {path.icon}
                  </div>

                  <h3>
                    {path.title}
                  </h3>

                  <p>
                    {path.description}
                  </p>

                </div>

              )
            )
          }

        </div>

      </section>

      {/* CTA */}

      <section className={styles.ctaSection}>

        <div className={styles.ctaCard}>

          <h2>
            Ready To Level Up?
          </h2>

          <p>
            Join thousands of learners
            building their future with
            DevSphere.
          </p>

          <button>
            Start Learning
          </button>

        </div>

      </section>

    </main>

  );
}

export default Tutorials;