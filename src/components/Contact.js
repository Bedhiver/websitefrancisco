import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function onUpdate(e) {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
    // console.log(contactForm);
  }

  function submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:8080/send",
      data: contactForm,
    }).then((response) => {
      if (response.data.status === "success") {
        console.log("ca marche");
        alert("Message Sent.");
        resetForm(e);
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
        console.log("ca marche pas");
      }
    });
  }

  function resetForm(e) {
    e.target.reset();
    console.log("reset ", e);
  }

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="title">Contact Us</h2>
              <p>
                Let us know what you think! In order to provide better service,
                please do not hesitate to give us your feedback. Thank you.
              </p>
              <hr />
              <form id="contact-form" onSubmit={submitEmail.bind(this)} method="POST">
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        name="name"
                        placeholder="Name"
                        id="name"
                        type="text"
                        className="form-control"
                        required
                        value={contactForm.name}
                        onChange={onUpdate}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="email"
                        placeholder="Email"
                        id="email"
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        required
                        value={contactForm.email}
                        onChange={onUpdate}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    name="subject"
                    placeholder="Subject"
                    id="subject"
                    type="text"
                    className="form-control"
                    required
                    value={contactForm.subject}
                    onChange={onUpdate}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    id="message"
                    className="form-control"
                    rows="1"
                    required
                    value={contactForm.message}
                    onChange={onUpdate}
                  />
                </div>
                <button type="submit" className="primary-btn submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
