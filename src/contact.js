import React, { useState } from "react";
import "./contact.css";

const contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add further logic here, such as sending the form data to a server
    // or displaying a success message.
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setFormSubmitted(false);
    }, 3000); // Reset form and remove thank you message after 3 seconds
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="thank-you-message">
          <p>Thank you for your message!</p>
        </div>
      )}
    </div>
  );
};

export default contact;
