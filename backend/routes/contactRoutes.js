import "dotenv/config";
import express from "express";
import { Resend } from "resend";

const router = express.Router();

const resend = new Resend(
  process.env.RESEND_API_KEY
);


// =========================================
// HTML ESCAPE FUNCTION
// =========================================

const escapeHtml = (value = "") => {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};


// =========================================
// CONTACT FORM
// =========================================

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;


    // =====================================
    // VALIDATION
    // =====================================

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }


    // =====================================
    // CLEAN / ESCAPE USER INPUT
    // =====================================

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message)
      .replace(/\n/g, "<br />");


    // =====================================
    // SEND EMAIL USING RESEND
    // =====================================

    const { data, error } = await resend.emails.send({

      from: process.env.CONTACT_SENDER_EMAIL,

      to: [process.env.CONTACT_RECEIVER_EMAIL],

      replyTo: email,

      subject: `DevSphere Contact: ${subject}`,

      text: `
New message received from DevSphere Contact Form

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #222;
            max-width: 700px;
            margin: 0 auto;
          "
        >

          <h2 style="color: #00d084;">
            New DevSphere Contact Message
          </h2>

          <hr />

          <p>
            <strong>Name:</strong>
            ${safeName}
          </p>

          <p>
            <strong>Email:</strong>
            ${safeEmail}
          </p>

          <p>
            <strong>Subject:</strong>
            ${safeSubject}
          </p>

          <h3>
            Message
          </h3>

          <p>
            ${safeMessage}
          </p>

          <hr />

          <p
            style="
              color: #777;
              font-size: 13px;
            "
          >
            This message was sent through the
            DevSphere contact form.
          </p>

        </div>
      `,
    });


    // =====================================
    // RESEND ERROR
    // =====================================

    if (error) {

      console.error(
        "Resend email error:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Something went wrong while sending your message.",
      });
    }


    // =====================================
    // SUCCESS RESPONSE
    // =====================================

    console.log(
      "Contact email sent successfully:",
      data?.id
    );

    return res.status(200).json({
      success: true,
      message:
        "Your message has been sent successfully.",
    });

  } catch (error) {

    console.error(
      "Contact form error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while sending your message.",
    });
  }
});


export default router;