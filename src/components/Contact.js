import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleUpdate(e) {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmitEmail(e) {
    try {
      e.preventDefault();

      axios.post("http://localhost:8080/send", contactForm).then((res) => {
        if (res.status === 200) {
          alert("Message envoyé");
          console.log(res);
        } else if (res.status === 500) {
          alert("Echec de l'envoi");
        }
      });

      resetForm();
    } catch (err) {}
  }

  function resetForm() {
    let resetContactForm = {};
    Object.keys(contactForm).forEach((key) => {
      resetContactForm[key] = "";
    });

    setContactForm(resetContactForm);
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
              <form
                id="contact-form"
                onSubmit={onSubmitEmail.bind(this)}
                // method="POST"
              >
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
                        onChange={handleUpdate}
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
                        onChange={handleUpdate}
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
                    onChange={handleUpdate}
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
                    onChange={handleUpdate}
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
