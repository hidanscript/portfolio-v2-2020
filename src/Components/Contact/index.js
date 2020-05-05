import React from 'react';
import axios from 'axios';
import './index.css';

function Contact() {

  const handleSubmit = form => {
    form.preventDefault();
    const name = form.target.name.value;
    const email = form.target.email.value;
    const message = form.target.message.value;

    const data = {
      name,
      email,
      message
    };

    axios.post("/send", data)
      .then(res => console.log(res))
      .catch(err => alert(err));

  };

  return(
    <div id="contact" className="contact-form">
      <form onSubmit={handleSubmit}>
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
