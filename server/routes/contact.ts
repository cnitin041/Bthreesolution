import { RequestHandler } from "express";
import { ContactFormData, ContactFormResponse } from "@shared/api";
import nodemailer from "nodemailer";

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const formData: ContactFormData = req.body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      const response: ContactFormResponse = {
        success: false,
        message: "Missing required fields",
        error: "Name, email, and message are required",
      };
      return res.status(400).json(response);
    }

    // Email configuration
    const recipientEmail = "Bthreeesolutions@gmail.com";

    // Create email transporter
    // For production, use environment variables for credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || recipientEmail,
        pass: process.env.EMAIL_PASSWORD, // App-specific password required
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || recipientEmail,
      to: recipientEmail,
      subject: `New Assignment Help Inquiry from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F0F0F; border-bottom: 2px solid #0F0F0F; padding-bottom: 10px;">
            New Assignment Help Inquiry
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${formData.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${formData.email}</p>
            ${formData.phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${formData.phone}</p>` : ""}
            ${formData.company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${formData.company}</p>` : ""}
          </div>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="background-color: #F5F5F5; padding: 15px; border-left: 4px solid #0F0F0F; margin: 10px 0;">
              ${formData.message}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E0E0E0; color: #828282; font-size: 12px;">
            <p>This inquiry was sent from the Bthreeesolutions assignment help contact form.</p>
          </div>
        </div>
      `,
      replyTo: formData.email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    const response: ContactFormResponse = {
      success: true,
      message: "Contact form submitted successfully",
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error sending email:", error);

    const response: ContactFormResponse = {
      success: false,
      message: "Failed to send email",
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };

    res.status(500).json(response);
  }
};
