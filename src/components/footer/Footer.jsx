import styles from "./Footer.module.css";

function Footer() {

  return (

    <footer className={styles.footer}>

      {/* TOP FOOTER */}

      <div className={styles.topFooter}>

        {/* BRAND SECTION */}

        <div className={styles.brandSection}>

          <h2>
            DevSphere
          </h2>

          <p>
            Learn modern technologies,
            build real-world projects and
            grow your tech career with
            structured learning paths.
          </p>

          {/* SOCIAL ICONS */}

          <div className={styles.socialIcons}>

            <a href="#">
              🌐
            </a>

            <a href="#">
              💼
            </a>

            <a href="#">
              🐦
            </a>

            <a href="#">
              📸
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className={styles.footerColumn}>

          <h3>
            Quick Links
          </h3>

          <a href="#">
            Home
          </a>

          <a href="#">
            Courses
          </a>

          <a href="#">
            Tutorials
          </a>

          <a href="#">
            Blogs
          </a>

          <a href="#">
            Contact
          </a>

        </div>

        {/* CATEGORIES */}

        <div className={styles.footerColumn}>

          <h3>
            Categories
          </h3>

          <a href="#">
            Web Development
          </a>

          <a href="#">
            AI & ML
          </a>

          <a href="#">
            Data Science
          </a>

          <a href="#">
            DSA
          </a>

          <a href="#">
            Cloud & DevOps
          </a>

        </div>

        {/* NEWSLETTER */}

        <div className={styles.newsletterSection}>

          <h3>
            Stay Updated
          </h3>

          <p>
            Subscribe to get latest
            tutorials, blogs and tech updates.
          </p>

          <div className={styles.newsletterBox}>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </div>

      </div>

      {/* BOTTOM FOOTER */}

      <div className={styles.bottomFooter}>

        <p>
          © 2026 DevSphere. All rights reserved.
        </p>

        <div className={styles.bottomLinks}>

          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms
          </a>

          <a href="#">
            Cookies
          </a>

        </div>

      </div>

    </footer>

  );
}

export default Footer;