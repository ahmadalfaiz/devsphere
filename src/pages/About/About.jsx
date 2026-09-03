import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  FaArrowRight,
  FaBookOpen,
  FaBullseye,
  FaCode,
  FaGamepad,
  FaLightbulb,
  FaLaptopCode,
  FaMapSigns,
  FaRocket,
  FaTools,
  FaUserGraduate,
} from "react-icons/fa";
import styles from "./About.module.css";
import { setSEO } from "../../utils/seo";

function About() {
  useEffect(() => {
    setSEO({
      title: "About DevSphere - Learn, Build & Grow",
      description:
        "Learn about DevSphere, a technology learning platform offering structured programming tutorials, coding practice, technical articles, developer resources, and interactive learning experiences.",
      keywords:
        "About DevSphere, DevSphere, programming learning platform, coding tutorials, software development learning, programming resources",
      url: "/about-us",
    });
  }, []);

  const platformFeatures = [
    {
      icon: FaBookOpen,
      title: "Structured Tutorials",
      description:
        "Learn programming and development technologies through organized lessons that take you from fundamentals to advanced concepts.",
    },
    {
      icon: FaLaptopCode,
      title: "Practical Learning",
      description:
        "Go beyond theory with practical examples, coding exercises, projects, and concepts designed around real-world development.",
    },
    {
      icon: FaCode,
      title: "Coding Practice",
      description:
        "Strengthen your problem-solving and programming skills by practicing concepts and applying what you learn.",
    },
    {
      icon: FaLightbulb,
      title: "Technical Articles",
      description:
        "Explore practical articles covering programming, software engineering, web development, AI, and modern technology.",
    },
    {
      icon: FaGamepad,
      title: "Interactive Games",
      description:
        "Take a break while keeping your mind active with interactive games such as Sudoku, Wordle, and Octordle.",
    },
    {
      icon: FaTools,
      title: "Developer Resources",
      description:
        "Discover useful tools, references, resources, and learning material designed to support your development journey.",
    },
  ];

  const learningPrinciples = [
    {
      icon: FaBookOpen,
      title: "Learn",
      description:
        "Build a strong foundation by understanding the concepts and technologies you're working with.",
    },
    {
      icon: FaLightbulb,
      title: "Understand",
      description:
        "Go beyond memorizing syntax and understand how things work and why they matter.",
    },
    {
      icon: FaCode,
      title: "Practice",
      description:
        "Reinforce your knowledge by solving problems and applying concepts through practice.",
    },
    {
      icon: FaRocket,
      title: "Build",
      description:
        "Turn knowledge into experience by creating projects and working with real-world technologies.",
    },
  ];

  return (
    <main className={styles.aboutPage}>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className={styles.heroSection}>
        <div className={styles.heroGlow} />

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <FaCode aria-hidden="true" />
            <span>ABOUT DEVSPHERE</span>
          </div>

          <h1>
            Learn.
            <span> Build. </span>
            Grow.
          </h1>

          <p>
            DevSphere is a technology learning platform built to help
            aspiring developers and software engineers learn skills,
            practice concepts, and build toward real-world development.
          </p>

          <div className={styles.heroActions}>
            <Link
              to="/tutorials"
              className={styles.primaryButton}
            >
              Explore Tutorials
              <FaArrowRight aria-hidden="true" />
            </Link>

            <Link
              to="/games"
              className={styles.secondaryButton}
            >
              Explore Games
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT IS DEVSPHERE
      ===================================================== */}

      <section className={styles.introSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>
            OUR PLATFORM
          </span>

          <h2>
            What is DevSphere?
          </h2>

          <p>
            A place to learn technology with structure, practice what
            you learn, and keep building your skills.
          </p>
        </div>

        <div className={styles.introContent}>
          <div className={styles.introIcon}>
            <FaLaptopCode aria-hidden="true" />
          </div>

          <div className={styles.introText}>
            <p>
              DevSphere is a technology learning platform designed to
              make software development easier to learn, understand,
              and practice.
            </p>

            <p>
              Technology can be overwhelming when learning material is
              scattered across countless resources. DevSphere brings
              structured tutorials, practical learning resources,
              coding practice, technical articles, interactive games,
              and developer-focused tools together in one place.
            </p>

            <p>
              Whether you're learning your first programming language,
              exploring modern web development, preparing for a
              technical career, or strengthening your existing skills,
              DevSphere is built to support you throughout the journey.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION SECTION
      ===================================================== */}

      <section className={styles.missionSection}>
        <div className={styles.missionCard}>
          <div className={styles.missionIcon}>
            <FaBullseye aria-hidden="true" />
          </div>

          <div className={styles.missionContent}>
            <span className={styles.sectionEyebrow}>
              OUR MISSION
            </span>

            <h2>
              Make Technology Learning
              <span> Clear, Practical & Accessible</span>
            </h2>

            <p>
              Our mission is to make high-quality technology education
              more structured, practical, and accessible for everyone.
            </p>

            <p>
              We believe learning technology should not be limited to
              memorizing syntax or following disconnected tutorials.
              Learners should understand the fundamentals, see how
              concepts are applied, practice them, and eventually use
              their knowledge to build something meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PLATFORM FEATURES
      ===================================================== */}

      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>
            WHAT YOU CAN FIND
          </span>

          <h2>
            Everything You Need to
            <span> Keep Learning</span>
          </h2>

          <p>
            DevSphere brings different parts of the learning journey
            together so you can learn, practice, explore, and grow.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {platformFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={styles.featureCard}
              >
                <div className={styles.featureIcon}>
                  <Icon aria-hidden="true" />
                </div>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          WHY DEVSPHERE
      ===================================================== */}

      <section className={styles.whySection}>
        <div className={styles.whyContent}>
          <div className={styles.whyHeading}>
            <span className={styles.sectionEyebrow}>
              WHY DEVSPHERE
            </span>

            <h2>
              Built Around
              <span> Learning, Not Just Content</span>
            </h2>
          </div>

          <div className={styles.whyText}>
            <p>
              There is no shortage of programming content on the
              internet. The challenge is finding the right information,
              understanding it in the right order, and actually putting
              it into practice.
            </p>

            <p>
              DevSphere focuses on creating a more organized learning
              experience where concepts are connected and learners can
              move from understanding a topic to actually applying it.
            </p>

            <div className={styles.whyPoints}>
              <div className={styles.whyPoint}>
                <div className={styles.pointIcon}>
                  <FaMapSigns aria-hidden="true" />
                </div>

                <div>
                  <h3>Structured</h3>
                  <p>
                    Follow organized learning material instead of
                    jumping randomly between topics.
                  </p>
                </div>
              </div>

              <div className={styles.whyPoint}>
                <div className={styles.pointIcon}>
                  <FaCode aria-hidden="true" />
                </div>

                <div>
                  <h3>Practical</h3>
                  <p>
                    Connect concepts with examples, practice, and
                    real-world development.
                  </p>
                </div>
              </div>

              <div className={styles.whyPoint}>
                <div className={styles.pointIcon}>
                  <FaRocket aria-hidden="true" />
                </div>

                <div>
                  <h3>Growth Focused</h3>
                  <p>
                    Build skills progressively and keep improving as
                    technology evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNING APPROACH
      ===================================================== */}

      <section className={styles.approachSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>
            OUR APPROACH
          </span>

          <h2>
            Learn. Understand. Practice.
            <span> Build.</span>
          </h2>

          <p>
            We believe effective technical learning is a continuous
            process rather than simply consuming information.
          </p>
        </div>

        <div className={styles.approachGrid}>
          {learningPrinciples.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.title}
                className={styles.approachCard}
              >
                <div className={styles.approachNumber}>
                  0{index + 1}
                </div>

                <div className={styles.approachIcon}>
                  <Icon aria-hidden="true" />
                </div>

                <h3>
                  {principle.title}
                </h3>

                <p>
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          BEHIND DEVSPHERE
      ===================================================== */}

      <section className={styles.founderSection}>
        <div className={styles.founderCard}>
          <div className={styles.founderVisual}>
            <div className={styles.founderIcon}>
              <FaUserGraduate aria-hidden="true" />
            </div>
          </div>

          <div className={styles.founderContent}>
            <span className={styles.sectionEyebrow}>
              BEHIND DEVSPHERE
            </span>

            <h2>
              Built With a Simple Idea
            </h2>

            <p>
              DevSphere was created with the idea of bringing
              structured learning, practical resources, and
              technology-focused experiences together in one platform.
            </p>

            <p>
              The goal is to continuously improve the platform and
              create resources that genuinely help people learn
              technology, strengthen their skills, and move closer to
              their career goals.
            </p>

            <div className={styles.founderInfo}>
              <strong>
                Faiz al-Ahmad
              </strong>

              <span>
                Founder &amp; Creator, DevSphere
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          JOURNEY AHEAD
      ===================================================== */}

      <section className={styles.futureSection}>
        <div className={styles.futureContent}>
          <div className={styles.futureIcon}>
            <FaRocket aria-hidden="true" />
          </div>

          <div>
            <span className={styles.sectionEyebrow}>
              THE JOURNEY AHEAD
            </span>

            <h2>
              Always Learning.
              <span> Always Evolving.</span>
            </h2>

            <p>
              DevSphere is continuously evolving. As the platform
              grows, we aim to expand its tutorials, practical learning
              experiences, developer tools, articles, and interactive
              features to create a more complete environment for
              learning and practicing technology.
            </p>

            <p>
              The journey doesn't end with learning a technology.
              There is always another concept to understand, another
              problem to solve, and another thing to build.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaIcon}>
            <FaRocket aria-hidden="true" />
          </div>

          <span className={styles.sectionEyebrow}>
            START YOUR JOURNEY
          </span>

          <h2>
            Ready to Level Up?
          </h2>

          <p>
            Start learning, practice what you know, and build the
            skills that move your technology journey forward.
          </p>

          <div className={styles.ctaActions}>
            <Link
              to="/tutorials"
              className={styles.primaryButton}
            >
              Start Learning
              <FaArrowRight aria-hidden="true" />
            </Link>

            <Link
              to="/games"
              className={styles.secondaryButton}
            >
              Explore Games
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;