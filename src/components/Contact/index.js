import React, { useRef } from "react";
import "./Contact.scss";

function Contact() {
  //hooks en useRef pour eviter le re-render du useState
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    // alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎");
  };

  //Ajout du "tabindex" pour l accessibilite/navigation entre les inputs du form au "tab"

  return (
    <div className="container">
      <h1 className="form-title">Contactez Moi</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="name">
          <label for="firstName" id="nameLabel">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="firstName"
            ref={firstNameRef}
            tabindex="1"
          />

          <label for="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            className="lastName"
            ref={lastNameRef}
            tabindex="2"
          />
        </div>
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="email"
          placeholder="example@corp.com"
          ref={emailRef}
          tabindex="3"
        />

        <label for="message">Message</label>
        <textarea
          placeholder="Start typing..."
          className="message"
          name="message"
          ref={messageRef}
          tabindex="4"
        ></textarea>
        <button type="submit" className="send">
          Envoyer formulaire
        </button>
      </form>
    </div>
  );
}

export default Contact;
