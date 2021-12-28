import React, { useRef } from "react";
import "./Contact.scss";
import { send } from "emailjs-com";
import { useState } from "react";

//import emailjs from "email-js.com";
import { init } from "emailjs-com";
init("user_CZcgPBjIisS3YBjf6SxwA");

function Contact() {
  const userId = "user_CZcgPBjIisS3YBjf6SxwA";
  const templateId = "template_site-perso";
  const serviceId = "site-perso";

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(serviceId, templateId, toSend, userId)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="from name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="to_name"
          placeholder="to name"
          value={toSend.to_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}

export default Contact;
