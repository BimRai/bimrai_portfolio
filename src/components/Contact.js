import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_cgg7vuq", // Replace with your actual Service ID
        "template_as80wtp", // Replace with your actual Template ID
        {
          from_name: formData.name, // Matches {{from_name}} in your EmailJS template
          from_email: formData.email, // Matches {{from_email}} in your EmailJS template
          message: formData.message, // Matches {{message}} in your EmailJS template
        },
        "AlByb4qz-caZ0_a5t" // Replace with your actual Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form fields
        },
        (error) => {
          console.error("Failed to send email:", error);
          setStatus("Failed to send the message. Try again.");
        }
      );
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="contact-btn">
          Send
        </button>

        {status && <p className="contact-status">{status}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
