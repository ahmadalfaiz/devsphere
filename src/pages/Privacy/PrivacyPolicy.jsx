import React from "react";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <main className={styles.privacyPage}>

      {/* =========================================
          PRIVACY HEADER
      ========================================== */}
      <section className={styles.privacyHeader}>

        <div className={styles.headerContent}>

          <span className={styles.headerLabel}>
            PRIVACY & SECURITY
          </span>

          <h1 className={styles.privacyTitle}>
            Privacy Policy
          </h1>

          <p className={styles.privacySubtitle}>
            Your privacy matters to us. This policy explains
            what information DevSphere collects, how we use it,
            and how we protect it.
          </p>

          <div className={styles.lastUpdated}>
            Last Updated: August 2026
          </div>

        </div>

      </section>


      {/* =========================================
          PRIVACY CONTENT
      ========================================== */}
      <section className={styles.privacySection}>

        <div className={styles.privacyContainer}>

          {/* =====================================
              INTRODUCTION
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              1. Introduction
            </h2>

            <p>
              Welcome to DevSphere. DevSphere is a technology
              platform that provides programming tutorials,
              technical articles, developer resources, and
              online tools.
            </p>

            <p>
              We respect your privacy and are committed to
              protecting the information you provide while
              using our website. This Privacy Policy explains
              how we collect, use, store, and protect information
              when you access or use DevSphere.
            </p>

          </div>


          {/* =====================================
              INFORMATION WE COLLECT
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              2. Information We Collect
            </h2>

            <p>
              We may collect different types of information
              depending on how you interact with DevSphere.
            </p>

            <h3>
              2.1 Information You Provide
            </h3>

            <p>
              When you create an account, contact us, or
              interact with certain features, you may provide
              information such as:
            </p>

            <ul>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Account login credentials</li>
              <li>Messages or feedback submitted through our contact form</li>
              <li>Other information you voluntarily provide</li>
            </ul>

            <h3>
              2.2 Information Collected Automatically
            </h3>

            <p>
              When you visit DevSphere, certain technical
              information may be collected automatically,
              including information such as your browser type,
              device type, operating system, IP address, and
              general usage information.
            </p>

            <p>
              This information may be used to understand how
              visitors use the platform and to improve its
              performance, security, and user experience.
            </p>

          </div>


          {/* =====================================
              HOW WE USE INFORMATION
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              3. How We Use Your Information
            </h2>

            <p>
              Information collected through DevSphere may be
              used for the following purposes:
            </p>

            <ul>
              <li>
                To create and manage user accounts.
              </li>

              <li>
                To provide and maintain DevSphere services.
              </li>

              <li>
                To respond to questions, feedback, and support
                requests.
              </li>

              <li>
                To improve tutorials, articles, tools, and
                other website features.
              </li>

              <li>
                To detect, prevent, and address security issues
                or fraudulent activity.
              </li>

              <li>
                To monitor website performance and functionality.
              </li>

              <li>
                To comply with applicable legal obligations.
              </li>
            </ul>

          </div>


          {/* =====================================
              ACCOUNT INFORMATION
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              4. Account Information
            </h2>

            <p>
              If you create an account on DevSphere, we may
              store information necessary to authenticate and
              maintain your account.
            </p>

            <p>
              You are responsible for keeping your account
              credentials confidential and should avoid sharing
              your password with anyone else.
            </p>

            <p>
              We recommend using a strong and unique password
              for your DevSphere account.
            </p>

          </div>


          {/* =====================================
              CONTACT FORM
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              5. Contact Form Information
            </h2>

            <p>
              When you submit a message through our contact
              form, we may collect the name, email address,
              subject, and message you provide.
            </p>

            <p>
              This information is used to respond to your
              inquiry, suggestion, feedback, or issue report.
            </p>

            <p>
              We do not use contact form information for
              unrelated purposes without a legitimate reason
              or your consent where required.
            </p>

          </div>


          {/* =====================================
              COOKIES
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              6. Cookies and Similar Technologies
            </h2>

            <p>
              DevSphere may use cookies, local storage, or
              similar technologies to support essential website
              functionality and improve the user experience.
            </p>

            <p>
              These technologies may be used to remember
              preferences, maintain sessions, or provide
              functionality requested by the user.
            </p>

          </div>


          {/* =====================================
              THIRD-PARTY SERVICES
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              7. Third-Party Services
            </h2>

            <p>
              DevSphere may rely on third-party service
              providers for certain technical or operational
              functions, such as hosting, infrastructure,
              analytics, email delivery, or security.
            </p>

            <p>
              These providers may process limited information
              as necessary to provide their services. We
              encourage users to review the privacy policies
              of third-party services they interact with.
            </p>

          </div>


          {/* =====================================
              EMAIL COMMUNICATION
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              8. Email Communications
            </h2>

            <p>
              If you contact DevSphere, your email address may
              be used to respond to your request or communicate
              with you regarding the matter you contacted us
              about.
            </p>

            <p>
              We do not intentionally use contact information
              to send unrelated promotional emails unless
              appropriate consent has been obtained.
            </p>

          </div>


          {/* =====================================
              DATA SECURITY
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              9. Data Security
            </h2>

            <p>
              We take reasonable measures to protect information
              from unauthorized access, alteration, disclosure,
              or destruction.
            </p>

            <p>
              However, no method of transmitting information
              over the internet or storing information
              electronically can be guaranteed to be completely
              secure.
            </p>

          </div>


          {/* =====================================
              DATA RETENTION
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              10. Data Retention
            </h2>

            <p>
              We retain information only for as long as
              reasonably necessary to provide our services,
              respond to requests, maintain security, resolve
              disputes, and comply with applicable legal
              obligations.
            </p>

            <p>
              The retention period may vary depending on the
              type and purpose of the information.
            </p>

          </div>


          {/* =====================================
              YOUR RIGHTS
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              11. Your Privacy Rights
            </h2>

            <p>
              Depending on your location and applicable law,
              you may have rights regarding your personal
              information, including the right to:
            </p>

            <ul>
              <li>Request access to information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of certain information.</li>
              <li>Ask questions about how your information is used.</li>
              <li>Withdraw consent where processing is based on consent.</li>
            </ul>

            <p>
              To make a privacy-related request, you can contact
              us using the contact information provided below.
            </p>

          </div>


          {/* =====================================
              CHILDREN'S PRIVACY
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              12. Children&apos;s Privacy
            </h2>

            <p>
              DevSphere is intended for general audiences and
              is not specifically directed toward children.
            </p>

            <p>
              We do not knowingly collect personal information
              from children in circumstances where such
              collection is prohibited by applicable law.
            </p>

          </div>


          {/* =====================================
              EXTERNAL LINKS
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              13. External Links
            </h2>

            <p>
              DevSphere may contain links to third-party
              websites, services, documentation, or resources.
            </p>

            <p>
              We are not responsible for the privacy practices,
              security, or content of external websites. We
              recommend reviewing their respective privacy
              policies before providing personal information.
            </p>

          </div>


          {/* =====================================
              POLICY CHANGES
          ====================================== */}
          <div className={styles.policySection}>

            <h2>
              14. Changes to This Privacy Policy
            </h2>

            <p>
              We may update this Privacy Policy from time to
              time to reflect changes to DevSphere, our
              practices, or applicable legal requirements.
            </p>

            <p>
              When changes are made, the updated policy will
              be published on this page and the
              &quot;Last Updated&quot; date will be revised.
            </p>

          </div>


          {/* =====================================
              CONTACT US
          ====================================== */}
          <div className={`${styles.policySection} ${styles.contactSection}`}>

            <h2>
              15. Contact Us
            </h2>

            <p>
              If you have questions, concerns, or requests
              regarding this Privacy Policy or how DevSphere
              handles information, you can contact us.
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
              FINAL NOTE
          ====================================== */}
          <div className={styles.policyFooter}>

            <p>
              By using DevSphere, you acknowledge that you
              have read and understood this Privacy Policy.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};

export default PrivacyPolicy;