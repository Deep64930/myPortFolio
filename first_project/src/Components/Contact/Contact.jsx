import React,{ useRef } from 'react'
import "./Contact.css"

import {MdEmail} from "react-icons/md";
import {SiGmail} from "react-icons/si";
import {BsWhatsapp} from "react-icons/bs";
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_8ycww68', 'template_5edi459', '--GrN1J8zJfvkwi4d')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>deepakraj5455@icloud.com</h5>
            <a href='mailto:deepakraj5455@icloud.com'>Send a Message</a>
          </article>

          <article className="contact__option">
            <SiGmail className='contact-option-icon' />
            <h4>Gmail</h4>
            <h5>deepakraj5455@gmail.com</h5>
            <a href='mailto:deepakraj5455@gmail.com'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact-option-icon'/>
            <h4>Whatsapp</h4>
            <h5>9939183692</h5>
            <a href='https://api.whatsapp.com/send?phone+919939183692'>Send a Message</a>
          </article>


        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name'placeholder='your full name' required />

          <input type="email" name='email'placeholder='your email' required />

          <textarea name="message" id=''  rows='7' placeholder='your message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>

        </form>

      </div>



    </section>
  );
}

export default Contact