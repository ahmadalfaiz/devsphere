import styles from "./HeroSection.module.css";
import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/hero-image.png";

function HeroSection() {
  return (

    <section className={styles.heroSection}>

      {/* LEFT CONTENT */}

      <div className={styles.leftContent}>

        <span className={styles.badge}>
          🚀 Modern Learning Platform
        </span>

        <h1>
          Learn Tech Skills
          <span> Smarter & Faster</span>
        </h1>

        <p>
          Master programming, development, AI, DSA and
          real-world skills through premium tutorials,
          courses and hands-on practice.
        </p>

        {/* BUTTONS */}

        <div className={styles.heroButtons}>

          <Link to="/tutorials" className={styles.primaryBtn}>
            Start Learning
          </Link>

          <Link to="/courses" className={styles.secondaryBtn}>
            Explore Courses
          </Link>

        </div>

        {/* STATS */}

        <div className={styles.statsContainer}>

          <div className={styles.statCard}>
            <h2>20K+</h2>
            <p>Students</p>
          </div>

          <div className={styles.statCard}>
            <h2>500+</h2>
            <p>Tutorials</p>
          </div>

          <div className={styles.statCard}>
            <h2>120+</h2>
            <p>Courses</p>
          </div>

        </div>

      </div>

      {/* RIGHT CONTENT */}

      <div className={styles.rightContent}>

        <div className={styles.glow}></div>

        <img
          src={heroImage}
          alt="hero"
        />

      </div>

    </section>

  );
}

export default HeroSection;