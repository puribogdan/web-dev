import React from 'react';
import { useRef, useState } from 'react';
import './Contact.css';
import HeaderOther from '../HeaderOther/HeaderOther';
import emailjs from '@emailjs/browser';
import Footer from '../Footer/Footer';

const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_y4eckya',
        'template_63t1vnb',
        form.current,
        '7JGq5PzB9cMpnDvET'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <HeaderOther pageTitle="CONTACT" headerUrl="./src/assets/hero1.jpg" />
      <section className="contact-wrapper">
        <h1 className="h1">Contactează-ne</h1>
        <div className="info-contact-form-wrapper">
          <div className="info-contact-wrapper">
            <div className="info-contact">
              <img src="../src/assets/location.png" alt=""></img>
              <p>Năsăud, strada Rahovei nr 9</p>
            </div>
            <div className="info-contact">
              <img src="../src/assets/phone.png" alt=""></img>
              <p>0741234567</p>
            </div>
            <div className="info-contact">
              <img src="../src/assets/mail.png" alt=""></img>
              <p>irisgym@gmail.com</p>
            </div>
            <div className="info-contact">
              <img src="../src/assets/instagram.png" alt=""></img>
              <p>irisgymfitness</p>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="form-wrapper">
            <input type="text" placeholder="Nume" name="user_name" required />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Mesaj"
            ></textarea>
            <button type="submit">Trimite</button>
          </form>
        </div>
        {isEmailSent && <h2>Email-ul tău a fost trimis cu succes!</h2>}
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2706.617582452951!2d24.403237663216196!3d47.28272963214541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749e330547740c1%3A0x8cb5fa84fc6489e9!2sIri&#39;s%20Gym!5e0!3m2!1sen!2sro!4v1701333829988!5m2!1sen!2sro"
            width="800"
            height="450"
            style={{ border: '0' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
