import React from "react";
import styles from "./Cookies.module.css";

const Cookies = () => {
  return (
    <main className={styles.cookiesPage}>

      {/* =========================================
          COOKIES HEADER
      ========================================== */}
      <section className={styles.cookiesHeader}>

        <div className={styles.headerContent}>

          <span className={styles.headerLabel}>
            COOKIES & PREFERENCES
          </span>

          <h1 className={styles.cookiesTitle}>
            Cookies Policy
          </h1>

          <p className={styles.cookiesSubtitle}>
            This Cookies Policy explains how DevSphere uses cookies
            and similar technologies to improve functionality,
            maintain security, and enhance your browsing experience.
          </p>

          <div className={styles.lastUpdated}>
            Last Updated: August 2026
          </div>

        </div>

      </section>


      {/* =========================================
          COOKIES CONTENT
      ========================================== */}
      <section className={styles.cookiesSection}>

        <div className={styles.cookiesContainer}>


          {/* =====================================
              1. INTRODUCTION
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              1. Introduction
            </h2>

            <p>
              This Cookies Policy describes how DevSphere uses
              cookies and similar technologies when you visit or
              interact with our website, services, tutorials,
              articles, tools, and other features.
            </p>

            <p>
              By continuing to use DevSphere, you acknowledge that
              cookies may be used as described in this policy,
              subject to applicable laws and your browser settings.
            </p>

          </div>


          {/* =====================================
              2. WHAT ARE COOKIES
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              2. What Are Cookies?
            </h2>

            <p>
              Cookies are small text files stored on your device
              by your web browser when you visit a website. They
              help websites remember information about your visit,
              making future visits more efficient and improving
              overall user experience.
            </p>

            <p>
              Cookies do not typically contain information that
              directly identifies an individual by themselves,
              although they may be associated with information you
              voluntarily provide, such as your account or user
              preferences.
            </p>

          </div>


          {/* =====================================
              3. WHY WE USE COOKIES
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              3. Why DevSphere Uses Cookies
            </h2>

            <p>
              DevSphere uses cookies and similar technologies for
              legitimate operational purposes, including:
            </p>

            <ul>
              <li>
                Maintaining secure user sessions.
              </li>

              <li>
                Remembering authentication status.
              </li>

              <li>
                Preserving essential website functionality.
              </li>

              <li>
                Remembering user preferences where applicable.
              </li>

              <li>
                Improving website stability and usability.
              </li>

              <li>
                Protecting the platform against abuse and security threats.
              </li>
            </ul>

          </div>


          {/* =====================================
              4. ESSENTIAL COOKIES
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              4. Essential Cookies
            </h2>

            <p>
              Essential cookies are required for the core
              functionality of DevSphere. Without these cookies,
              certain features of the platform may not function
              correctly.
            </p>

            <p>
              These cookies may support account authentication,
              session management, security protections, navigation,
              and other critical website operations.
            </p>

            <p>
              Because these cookies are necessary for providing
              the Service, they generally cannot be disabled
              through DevSphere itself.
            </p>

          </div>


          {/* =====================================
              5. AUTHENTICATION COOKIES
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              5. Authentication and Session Cookies
            </h2>

            <p>
              If you create an account or sign in to DevSphere,
              session-related cookies or similar technologies may
              be used to verify your identity and maintain your
              authenticated session while using the platform.
            </p>

            <p>
              These cookies help prevent repeated logins during a
              session and contribute to the secure operation of
              account-related features.
            </p>

          </div>


          {/* =====================================
              6. FUNCTIONALITY COOKIES
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              6. Functionality Cookies
            </h2>

            <p>
              Functionality cookies allow DevSphere to remember
              certain non-essential preferences that improve your
              browsing experience.
            </p>

            <p>
              Depending on future platform features, these
              preferences may include interface settings,
              accessibility options, or other user-selected
              preferences.
            </p>

            <p>
              These cookies are designed to enhance usability
              rather than track personal activity.
            </p>

          </div>


          {/* =====================================
              7. ANALYTICS
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              7. Analytics Cookies
            </h2>

            <p>
              At present, DevSphere does not rely on advertising
              cookies to deliver personalized advertisements.
            </p>

            <p>
              If analytics or measurement technologies are
              introduced in the future, this Cookies Policy will
              be updated to explain what information is collected,
              why it is collected, and how users can manage those
              preferences where applicable.
            </p>

          </div>


          {/* =====================================
              8. THIRD-PARTY COOKIES
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              8. Third-Party Services
            </h2>

            <p>
              DevSphere may integrate trusted third-party services
              that provide functionality such as authentication,
              email delivery, hosting, security, or other
              technical infrastructure.
            </p>

            <p>
              These services may use their own cookies or similar
              technologies in accordance with their respective
              privacy policies. DevSphere does not control how
              third-party providers operate their own cookies.
            </p>

            <p>
              We encourage users to review the privacy and cookie
              policies of any third-party services they interact
              with.
            </p>

          </div>


          {/* =====================================
              9. LOCAL STORAGE
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              9. Local Storage and Similar Technologies
            </h2>

            <p>
              In addition to cookies, DevSphere may use browser
              storage technologies such as Local Storage or
              Session Storage where appropriate to improve website
              functionality.
            </p>

            <p>
              These technologies may temporarily store information
              such as interface preferences or session-related
              data directly within your browser.
            </p>

            <p>
              Local storage is managed separately from cookies and
              can typically be cleared through your browser
              settings.
            </p>

          </div>


          {/* =====================================
              10. MANAGING COOKIES
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              10. Managing Your Cookie Preferences
            </h2>

            <p>
              Most modern web browsers allow you to control,
              block, or delete cookies through browser settings.
            </p>

            <p>
              You can usually choose to:
            </p>

            <ul>
              <li>
                View stored cookies.
              </li>

              <li>
                Delete existing cookies.
              </li>

              <li>
                Block cookies entirely.
              </li>

              <li>
                Allow cookies only from selected websites.
              </li>

              <li>
                Automatically remove cookies when closing the browser.
              </li>
            </ul>

            <p>
              Browser settings vary depending on the browser you
              use, so please refer to your browser's official
              documentation for detailed instructions.
            </p>

          </div>


          {/* =====================================
              11. DISABLING COOKIES
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              11. What Happens If You Disable Cookies?
            </h2>

            <p>
              Disabling cookies may affect the functionality of
              certain parts of DevSphere.
            </p>

            <p>
              Depending on your browser configuration, features
              such as account authentication, session management,
              saved preferences, or other interactive functionality
              may not work as intended.
            </p>

            <p>
              Essential website functionality may therefore be
              reduced if cookies are completely blocked.
            </p>

          </div>


          {/* =====================================
              12. DATA PROTECTION
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              12. Data Protection
            </h2>

            <p>
              Cookies used by DevSphere are intended to support
              functionality, security, and user experience rather
              than to collect unnecessary personal information.
            </p>

            <p>
              Information associated with cookies is handled in
              accordance with our Privacy Policy and applicable
              data protection requirements.
            </p>

          </div>


          {/* =====================================
              13. POLICY UPDATES
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              13. Changes to This Cookies Policy
            </h2>

            <p>
              We may update this Cookies Policy from time to time
              to reflect changes in technology, legal requirements,
              browser standards, or DevSphere's functionality.
            </p>

            <p>
              Whenever material changes are made, the updated
              version will be published on this page together with
              a revised "Last Updated" date.
            </p>

          </div>


          {/* =====================================
              14. CONTACT US
          ====================================== */}
          <div className={`${styles.policySection} ${styles.contactSection}`}>

            <h2>
              14. Contact Us
            </h2>

            <p>
              If you have questions about this Cookies Policy or
              how DevSphere uses cookies and similar technologies,
              you may contact us using the information below.
            </p>

            <div className={styles.contactBox}>

              <span className={styles.contactBoxLabel}>
                Email
              </span>

              <a
                href="mailto:ahmad4884faiz@gmail.com"
                className={styles.contactEmail}
              >
                ahmad4884faiz@gmail.com
              </a>

            </div>

          </div>


          {/* =====================================
              FOOTER NOTE
          ====================================== */}
          <div className={styles.policyFooter}>

            <p>
              By continuing to use DevSphere, you acknowledge
              that you have read and understood this Cookies Policy.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Cookies;