import React, { useState } from "react";
import { FaMailBulk, FaLightbulb, FaBug, FaArrowRight } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const [status, setStatus] = useState({
      type: "",
      message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
      const {
        name,
        value,
      } = event.target;

      setFormData((previous) => ({
        ...previous,
        [name]: value,
      }));
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      setStatus({
        type: "",
        message: "",
      });

      setIsSubmitting(true);

      try {
        const response = await fetch(
          "https://devsphere-2nqo.onrender.com/api/contact",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Something went wrong."
          );
        }

        setStatus({
          type: "success",
          message: "Your message has been sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

      } catch (error) {

        console.error(
          "Contact form error:",
          error
        );

        setStatus({
          type: "error",
          message:
            error.message ||
            "Unable to send your message. Please try again.",
        });

      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <main className={styles.contactPage}>

      {/* =========================================
          CONTACT HEADER
      ========================================== */}
      <section className={styles.contactHeader}>
        <h1 className={styles.contactTitle}>
          Contact
        </h1>

        <p className={styles.contactSubtitle}>
          Have a question, suggestion, or feedback?
          We&apos;d love to hear from you.
        </p>
      </section>


      {/* =========================================
          CONTACT CONTENT
      ========================================== */}
      <section className={styles.contactSection}>

        <div className={styles.contactContainer}>

          {/* =====================================
              LEFT — GET IN TOUCH
          ====================================== */}
          <div className={styles.getInTouch}>

            <div className={styles.sectionIntro}>
              <span className={styles.sectionLabel}>
                GET IN TOUCH
              </span>

              <h2 className={styles.sectionTitle}>
                Let&apos;s start a conversation.
              </h2>

              <p className={styles.sectionDescription}>
                Have a question about DevSphere, found an issue,
                or have an idea that could make the platform better?
                Feel free to reach out.
              </p>
            </div>


            {/* =================================
                CONTACT INFORMATION
            ================================== */}
            <div className={styles.contactInfo}>

              {/* Email */}
              <div className={styles.contactItem}>

                <div className={styles.contactIcon}>
                  <FaMailBulk />
                </div>

                <div className={styles.contactItemContent}>
                  <span className={styles.contactItemLabel}>
                    Email
                  </span>

                  <span className={styles.contactItemText}>
                    ahmad4884faiz@gmail.com
                  </span>
                </div>

              </div>


              {/* Suggestions */}
              <div className={styles.contactItem}>

                <div className={styles.contactIcon}>
                  <FaLightbulb />
                </div>

                <div className={styles.contactItemContent}>
                  <span className={styles.contactItemLabel}>
                    Suggestions
                  </span>

                  <span className={styles.contactItemText}>
                    Have an idea for a new feature, tutorial,
                    or tool? Let us know.
                  </span>
                </div>

              </div>


              {/* Report an Issue */}
              <div className={styles.contactItem}>

                <div className={styles.contactIcon}>
                  <FaBug />
                </div>

                <div className={styles.contactItemContent}>
                  <span className={styles.contactItemLabel}>
                    Report an Issue
                  </span>

                  <span className={styles.contactItemText}>
                    Found something that isn&apos;t working correctly?
                    Tell us about it.
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* =====================================
              RIGHT — SEND A MESSAGE
          ====================================== */}
          <div className={styles.messageCard}>

            <div className={styles.messageHeader}>

              <span className={styles.sectionLabel}>
                SEND A MESSAGE
              </span>

              <h2 className={styles.messageTitle}>
                Tell us what&apos;s on your mind.
              </h2>

              <p className={styles.messageDescription}>
                Fill out the form below and we&apos;ll get back
                to you as soon as possible.
              </p>

            </div>

            {status.message && (
              <div
                className={
                  status.type === "success"
                    ? styles.successMessage
                    : styles.errorMessage
                }
              >
                {status.message}
              </div>
            )}

            {/* =================================
                CONTACT FORM
            ================================== */}
            <form className={styles.contactForm} onSubmit={handleSubmit}>

              {/* Name */}
              <div className={styles.formGroup}>

                <label htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>


              {/* Email */}
              <div className={styles.formGroup}>

                <label htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>


              {/* Subject */}
              <div className={styles.formGroup}>

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                />

              </div>


              {/* Message */}
              <div className={styles.formGroup}>

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                />

              </div>


              {/* Submit Button */}
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>

                <FaArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;