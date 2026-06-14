import styles from "./CTASection.module.css";

function CTASection() {

  return (

    <section className={styles.ctaSection}>

      {/* GLOW EFFECTS */}

      <div className={styles.glowOne}></div>

      <div className={styles.glowTwo}></div>

      {/* MAIN CARD */}

      <div className={styles.ctaCard}>

        <span>
          START YOUR JOURNEY
        </span>

        <h2>
          Become The Developer
          You Always Wanted To Be
        </h2>

        <p>
          Learn modern technologies, build real-world
          projects and prepare yourself for top tech
          careers with structured learning paths.
        </p>

        {/* BUTTONS */}

        <div className={styles.buttonContainer}>

          <button className={styles.primaryBtn}>
            Get Started Free
          </button>

          <button className={styles.secondaryBtn}>
            Explore Courses
          </button>

        </div>

      </div>

    </section>

  );
}

export default CTASection;