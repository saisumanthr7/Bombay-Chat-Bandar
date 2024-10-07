import React from 'react';
import './LocationContact.css';
import shopImage from '../Assets/Chatbackgroudimage.png'

const LocationContact = () => {
  return (
    <section className="location-contact">
      <div className="contact-container">

        <img src={shopImage} alt="Bombay Chat Bandar Shop"  className="shop-image"/>

        <div className="location-block">
          <h3>Location</h3>
          <p>123 chat Street, <br/>Mumbai, India</p>
        </div>

        <div className="hours-block">
          <h3>Hours</h3>
          <p>Monday - Friday: 10 AM - 10 PM</p>
          <p>Saturday - Sunday: 12 PM - 12 AM</p>
        </div>

        <div className="contact-block">
          <h3>Contact</h3>
          <p>Email: contact@bombaychatbandar.com</p>
          <p>Phone: +911234567899</p>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
