import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.CONTACT_EMAIL,
    pass: process.env.CONTACT_EMAIL_PASSWORD,
  },
});


router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;


    // ================================
    // VALIDATION
    // ================================

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }


    // ================================
    // SEND EMAIL
    // ================================

    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,

      to: process.env.CONTACT_RECEIVER_EMAIL,

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
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">

          <h2 style="color: #00d084;">
            New DevSphere Contact Message
          </h2>

          <hr />

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Subject:</strong> ${subject}
          </p>

          <h3>Message</h3>

          <p>
            ${message.replace(/\n/g, "<br />")}
          </p>

          <hr />

          <p style="color: #777; font-size: 13px;">
            This message was sent through the DevSphere contact form.
          </p>

        </div>
      `,
    });


    // ================================
    // SUCCESS RESPONSE
    // ================================

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully.",
    });

  } catch (error) {

    console.error(
      "Contact form error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending your message.",
    });
  }
});


export default router;