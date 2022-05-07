import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zdmdbgg', 'template_jlczcsj', form.current, 'oE30-NcKBlw6OyDDK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

  return (
    <div className='contact'>
        <div className="container">
            <div className="contact-info">
                <h1>Contact</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='FULL NAME' name='name' />
                    <input type="email" placeholder='EMAIL' name='email' />
                    <input type="text" placeholder='SUBJECT' name='subject' />
                    <input type="text" placeholder='MESSAGE' name='message' />
                    <button type='submit'>SUBMIT</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact