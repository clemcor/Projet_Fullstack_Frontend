import emailjs from 'emailjs-com';
import Header from '../header/header';
import { useEffect } from 'react';
import { useState } from 'react';




import './email.css'; // Import du fichier CSS pour styliser la page

function Email() {
  

  function sendEmail() {
    emailjs.init("-nLgJcYbgonOrdJUC");

    var params = {
      sendername: document.querySelector("#senderName").value,
      to: to,
      subject: document.querySelector("#subject").value,
      reply_to: document.querySelector("#replyTo").value,
      message: document.querySelector("#message").value  + "\n"+document.querySelector("#replyTo").value,
    };

    var service_id = import.meta.env.VITE_EMAIL_SERVICE_ID;
    var template_id = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

    emailjs.send(service_id, template_id, params)
      .then(res => {
        console.log('Email envoyé avec succès!', res.status, res.text);
        window.location.href = '/presentation';
      })
      .catch(err => console.error('Une erreur s\'est produite:', err));
  }

  const [to, setTo] = useState('');

  useEffect(() => {
    if (import.meta.env.VITE_EMAIL_DESTINATION) {
        setTo(import.meta.env.VITE_EMAIL_DESTINATION);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="email-page">
        
        <div className="email-form">
          <h2>Envoyer un email</h2>
          <label htmlFor="senderName">Sender Name:</label>
        <input type="text" id="senderName" /><br/>
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" /><br/>
        <label htmlFor="replyTo">Sender Email:</label>
        <input type="text" id="replyTo" /><br/>
        <label htmlFor="message">Message:</label><br/>
        <textarea id="message" cols="40" rows="8"></textarea><br/>
        <button onClick={sendEmail}>Send Email</button>
        </div>
      </div>
    </div>
  );
}

export default Email;
