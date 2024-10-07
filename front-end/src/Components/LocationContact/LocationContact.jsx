import React from 'react';
import './LocationContact.css';

const LocationContact = () => {
  return (
    <section className="location-contact">
      <h2>Find Us & Contact Us</h2>
      <div className="contact-container">
        <div className="location">
          <h3>Our Location</h3>
          <p>123 Chat Street, Mumbai, India</p>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>Email: contact@bombaychatbandar.com</p>
          <p>Phone: +91 123 456 7890</p>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
