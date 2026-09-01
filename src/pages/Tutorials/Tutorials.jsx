import { Link } from "react-router-dom";
import styles from "./Tutorials.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaJs, FaPython, FaJava, FaCentos, FaCogs, FaLaptopCode, FaServer, FaLayerGroup, FaBrain, FaCode, FaCloud, FaDatabase } from "react-icons/fa";

function Tutorials() {

  const featuredTutorials = [

    {
      title: "React.js",
      icon: FaReact,
      lessons: 106,
      level: "Beginner → Advanced",
      route: "/tutorials/react",
    },

    {
      title: "JavaScript",
      icon: FaJs,
      lessons: 130,
      level: "Beginner → Advanced",
      route: "/tutorials/javascript",
    },

    {
      title: "Python",
      icon: FaPython,
      lessons: 120,
      level: "Beginner → Advanced",
      route: "/tutorials/python",
    },

    {
      title: "Java",
      icon: FaJava,
      lessons: 90,
      level: "Intermediate",
      route: "/tutorials/java",
    },

    {
      title: "C++",
      icon: FaCentos,
      lessons: 259,
      level: "Intermediate",
      route: "/tutorials/cpp",
    },

    {
      title: "Machine Learning",
      icon: FaCogs,
      lessons: 126,
      level: "Advanced",
      route: "/tutorials/machine-learning",
    },

  ];

  const learningPaths = [

    {
      title: "Frontend Developer",
      description:
        "Master HTML, CSS, JavaScript, React and modern frontend tools.",
      icon: FaLaptopCode,
    },

    {
      title: "Backend Developer",
      description:
        "Learn Node.js, Express, APIs, Databases and Authentication.",
      icon: FaServer,
    },

    {
      title: "Full Stack Developer",
      description:
        "Become job-ready by mastering frontend and backend development.",
      icon: FaLayerGroup,
    },

    {
      title: "AI Engineer",
      description:
        "Learn Python, Machine Learning, Deep Learning and AI systems.",
      icon: FaBrain,
    },

  ];

    const categories = [
        {
            title: "Frontend",
            icon: FaLaptopCode,
            topics: [
            {name: "HTML", slug: "html",},
            {name: "CSS", slug: "css",},
            {name: "JavaScript", slug: "javascript",},
            {name: "React", slug: "react",},
            {name: "Next.js", slug: "nextjs",},
            {name: "Nuxt.js", slug: "nuxtjs"},
            ],
        },

        {
            title: "Backend",
            icon: FaServer,
            topics: [
            {name: "Node.js", slug: "nodejs",},
            {name: "Express.js", slug: "expressjs",},
            {name: "REST APIs", slug: "rest-apis",},
            {name: "Authentication", slug: "authentication",},
            {name: "Microservices", slug: "microservices",},
            ],
        },

        {
            title: "Programming",
            icon: FaCode,
            topics: [
            {name: "C", slug: "c",},
            {name: "C++", slug: "cpp",},
            {name: "C#", slug: "c-sharp"},
            {name: "Java", slug: "java",},
            {name: "Python", slug: "python",},
            {name: "JavaScript", slug: "javascript",},
            {name: "Rust", slug: "rust"},
            {name: "Swift", slug: "swift"},
            {name: "Kotlin", slug: "kotlin"},
            {name: "Dart", slug: "dart"},
            {name: "Ruby", slug: "ruby"},
            {name: "Go", slug: "golang"},
            ],
        },

        {
            title: "AI & ML",
            icon: FaBrain,
            topics: [
            {name: "Machine Learning", slug: "machine-learning",},
            {name: "Deep Learning", slug: "deep-learning",},
            {name: "NLP", slug: "natural-language-processing",},
            {name: "Computer Vision", slug: "computer-vision",},
            {name: "Generative AI", slug: "generative-ai",},
            ],
        },

        {
            title: "DevOps",
            icon: FaCloud,
            topics: [
            {name: "Docker", slug: "docker",},
            {name: "Kubernetes", slug: "kubernetes",},
            {name: "CI/CD", slug: "ci-cd",},
            {name: "Linux", slug: "linux",},
            {name: "AWS", slug: "amazon-web-services",},
            ],
        },

        {
            title: "Databases",
            icon: FaDatabase,
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

      <section id="explore-categories" className={styles.categorySection}>

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
                      <span className={styles.categoryIcon}>
                        <category.icon />
                      </span>
                      <span>{category.title}</span>
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
              (tutorial) => { const Icon = tutorial.icon; return(

                <div
                  key={tutorial.title}
                  className={styles.tutorialCard}
                >

                  <div className={styles.tutorialIcon}>
                    <Icon />{/*</>{tutorial.icon}*/}
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

              );}
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
              (path) => { const Icon = path.icon; return(

                <div
                  key={path.title}
                  className={styles.pathCard}
                >

                  <div className={styles.pathIcon}>
                    <Icon />
                  </div>

                  <h3>
                    {path.title}
                  </h3>

                  <p>
                    {path.description}
                  </p>

                </div>

              );}
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

          <button
            type="button"
            onClick={() => {
              document
                .getElementById("explore-categories")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
          >
            Start Learning
          </button>

        </div>

      </section>

    </main>

  );
}

export default Tutorials;