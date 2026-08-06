import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

import { useEffect } from "react";

import { setSEO } from "../../utils/seo";

function NotFound() {

  useEffect(() => {

    setSEO({

      title: "404 - Page Not Found | DevSphereHQ",

      description:
        "The page you are looking for could not be found. Browse our tutorials and continue learning on DevSphereHQ.",

      url: "/404",

      robots: "noindex, nofollow",

    });

  }, []);

  return (

    <main className={styles.notFoundPage}>

      <div className={styles.content}>

        <span className={styles.errorCode}>
          404
        </span>

        <h1>
          Page Not Found
        </h1>

        <p>
          Sorry, the page you're looking for doesn't exist,
          may have been moved, or the URL is incorrect.
        </p>

        <div className={styles.buttonGroup}>

          <Link
            to="/"
            className={styles.primaryButton}
          >
            Back to Home
          </Link>

          <Link
            to="/tutorials"
            className={styles.secondaryButton}
          >
            Browse Tutorials
          </Link>

        </div>

      </div>

    </main>

  );
}

export default NotFound;