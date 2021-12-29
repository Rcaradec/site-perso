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
    <div className="form-container">
      <form
        className="form animate__animated animate__fadeInUp"
        onSubmit={onSubmit}
      >
        <h1 className="form-title"> Pour me contacter:</h1>
        <input
          className="form-input"
          type="text"
          name="from_name"
          placeholder="Votre Nom "
          value={toSend.from_name}
          onChange={handleChange}
        />
        {/* <input
          className="form-input"
          type="text"
          name="to_name"
          placeholder="to name"
          value={toSend.to_name}
          onChange={handleChange}
        /> */}
        <input
          className="form-input"
          type="text"
          name="reply_to"
          placeholder="Votre email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <input
          className="form-input text_area"
          type="textarea"
          name="message"
          placeholder="Votre message"
          value={toSend.message}
          onChange={handleChange}
        />
        <button className="form-button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;
