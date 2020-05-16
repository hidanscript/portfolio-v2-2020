import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

function Contact() {

  const [ messageState, setMessageState ] = useState(null);

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
      .then(res => resetForm())
      .catch(err => alert(err));

  };

  const resetForm = () => {
    const form = document.querySelector('#contact-form');
    form.reset();
    setMessageState(1);
  };

  return(
    <div id="contact" className="contact-form">
      <form id="contact-form" onSubmit={handleSubmit}>
        { messageState &&
          (<div className="message-state-form">✔ Message sent!</div>)
        }
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
