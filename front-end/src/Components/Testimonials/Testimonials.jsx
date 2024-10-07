import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-item">
        <p>"The best chat in town! Pani Puri was out of this world!"</p>
        <p>- A Happy Customer</p>
      </div>
      <div className="testimonial-item">
        <p>"Loved the fusion of Indian and Chinese flavors, a must-try!"</p>
        <p>- Foodie Fanatic</p>
      </div>
    </section>
  );
};

export default Testimonials;
