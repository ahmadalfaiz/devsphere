import styles from "./Footer.module.css";
import { FaGlobe, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

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

            <a href="https://devspherehq.com/" target="_blank" rel="noopener noreferrer" aria-label="Website">
              <FaGlobe />
            </a>

            <a href="https://www.linkedin.com/company/devspherehq/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="https://www.instagram.com/devspherehq/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className={styles.footerColumn}>

          <h3>
            Quick Links
          </h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/courses">
            Courses
          </Link>

          <Link to="/tutorials">
            Tutorials
          </Link>

          <Link to="/articles">
            Articles
          </Link>

          <Link to="/contact-us">
            Contact
          </Link>

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

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link to="/terms-of-service">
            Terms
          </Link>

          <Link to="/cookies-policy">
            Cookies
          </Link>

        </div>

      </div>

    </footer>

  );
}

export default Footer;