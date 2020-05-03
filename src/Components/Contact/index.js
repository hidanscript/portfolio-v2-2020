import React from 'react';
import './index.css';

function Contact() {
  return(
    <div className="contact-form">
      <form>
        <h2>Contact Me</h2>
        <label>Name</label>
        <input type="text" name="name" className="name-input"/>
        <label>Email</label>
        <input type="email" name="email" className="name-input"/>
        <label>Message</label>
        <textarea name="message" className="name-input" rows="10"/>
        <button type="submit">SEND EMAIL</button>
      </form>
    </div>
  );
}

export default Contact;
