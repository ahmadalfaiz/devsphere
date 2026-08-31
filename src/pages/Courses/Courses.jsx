import { Link } from "react-router-dom";
import styles from "./Courses.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Courses() {

    const featuredSubjects = [

        {
            title: "DSA",
            icon: "⚛️",
            lessons: 120,
            level: "Beginner → Advanced",
            route: "/courses/dsa",
        },

        {
            title: "Operating Systems",
            icon: "🟨",
            lessons: 95,
            level: "Beginner → Advanced",
            route: "/courses/operating-systems",
        },

        {
            title: "DBMS",
            icon: "📊",
            lessons: 110,
            level: "Beginner → Advanced",
            route: "/courses/dbms",
        },

        {
            title: "OOPs",
            icon: "🫆",
            lessons: 90,
            level: "Intermediate",
            route: "/courses/oops",
        },

        {
            title: "Computer Networks",
            icon: "💻",
            lessons: 85,
            level: "Intermediate",
            route: "/courses/computer-networks",
        },

        {
            title: "Software Engineering",
            icon: "🤖",
            lessons: 130,
            level: "Advanced",
            route: "/courses/software-engineering",
        },

    ];

    const studyTracks = [

        {
            title: "Programming Foundations",
            description:
                "Build strong programming fundamentals with C, C++, Java, Python, and Object-Oriented Programming concepts.",
            icon: "💻",
        },

        {
            title: "Core Computer Science",
            description:
                "Master Operating Systems, DBMS, Computer Networks, Theory of Computation, and Compiler Design.",
            icon: "🖥️",
        },

        {
            title: "Data Structures & Algorithms",
            description:
                "Develop problem-solving skills through Data Structures, Algorithms, Competitive Programming, and interview preparation.",
            icon: "🧮",
        },

        {
            title: "Artificial Intelligence",
            description:
                "Explore Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Generative AI.",
            icon: "🤖",
        },

    ];

    const categories = [

        {
            title: "📘 Programming Fundamentals",
            topics: [
                { name: "C", slug: "c" },
                { name: "C++", slug: "cpp" },
                { name: "Java", slug: "java" },
                { name: "Python", slug: "python" },
                { name: "OOPs", slug: "oops" },
            ],
        },

        {
            title: "🧮 Data Structures & Algorithms",
            topics: [
                { name: "Data Structures", slug: "data-structures" },
                { name: "Algorithms", slug: "algorithms" },
                { name: "Competitive Programming", slug: "competitive-programming" },
                { name: "Problem Solving", slug: "problem-solving" },
                { name: "Advanced DSA", slug: "advanced-dsa" },
            ],
        },

        {
            title: "💻 Core Computer Science",
            topics: [
                { name: "Operating Systems", slug: "operating-systems" },
                { name: "Database Management Systems", slug: "dbms" },
                { name: "Computer Networks", slug: "computer-networks" },
                { name: "Theory of Computation", slug: "toc" },
                { name: "Compiler Design", slug: "compiler-design" },
            ],
        },

        {
            title: "🌐 Software Engineering",
            topics: [
                { name: "Software Engineering", slug: "software-engineering" },
                { name: "System Design", slug: "system-design" },
                { name: "Software Testing", slug: "software-testing" },
                { name: "Design Patterns", slug: "design-patterns" },
                { name: "Project Management", slug: "project-management" },
            ],
        },

        {
            title: "🤖 Artificial Intelligence",
            topics: [
                { name: "Machine Learning", slug: "machine-learning" },
                { name: "Deep Learning", slug: "deep-learning" },
                { name: "Natural Language Processing", slug: "natural-language-processing" },
                { name: "Computer Vision", slug: "computer-vision" },
                { name: "Generative AI", slug: "generative-ai" },
            ],
        },

        {
            title: "☁️ Cloud & DevOps",
            topics: [
                { name: "Cloud Computing", slug: "cloud-computing" },
                { name: "Docker", slug: "docker" },
                { name: "Kubernetes", slug: "kubernetes" },
                { name: "Linux", slug: "linux" },
                { name: "DevOps", slug: "devops" },
            ],
        },

    ];

    const [openCategory, setOpenCategory] =
        useState(null);

    const navigate = useNavigate();
  

  return (

    <main className={styles.coursesPage}>

        {/* HERO SECTION */}

        <section className={styles.heroSection}>

            <div className={styles.heroContent}>

                <span className={styles.heroBadge}>
                    🎓 DevSphere Professional Courses
                </span>

                <h1>
                    Master
                    <span> Computer Science</span>
                </h1>

                <p>
                    Learn core Computer Science subjects through structured,
                    semester-style courses designed for placements,
                    software engineering interviews, university studies,
                    and real-world careers.
                </p>

                <div className={styles.searchBox}>

                    <input
                        type="text"
                        placeholder="Search courses..."
                    />

                </div>

            </div>

        </section>

        {/* CATEGORIES */}

        <section className={styles.categorySection}>

            <div className={styles.sectionHeader}>

                <span>
                    Explore Subjects
                </span>

                <h2>
                    Learn Computer Science By Subject
                </h2>

            </div>

            <div className={styles.categoryGrid}>

                {categories.map((category, index) => (

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

                            <span>{category.title}</span>

                        </div>

                        {

                            openCategory === index && (

                                <div className={styles.categoryDropdown}>

                                    {

                                        category.topics.map((topic) => (

                                            <div

                                                key={topic.slug}

                                                className={styles.topicItem}

                                                onClick={() =>
                                                    navigate(
                                                        `/courses/${topic.slug}`
                                                    )
                                                }

                                            >
                                                {topic.name}
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                ))}
            </div>

        </section>

        {/* Featured Categories */}
        <section className={styles.featuredSection}>
        
            <div className={styles.sectionHeader}>
        
                <span>
                    Featured Subjects
                </span>
        
                <h2>
                    Start Learning Today
                </h2>
        
            </div>
        
            <div className={styles.tutorialGrid}>
        
                {
                    featuredSubjects.map(
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

        {/* Study Tracks */}
        <section className={styles.pathSection}>
        
            <div className={styles.sectionHeader}>
        
                <span>
                    Recommended Study Tracks
                </span>
        
                <h2>
                    Choose Your Learning Journey
                </h2>
        
            </div>
        
            <div className={styles.pathGrid}>
        
                {
                    studyTracks.map(
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

export default Courses;