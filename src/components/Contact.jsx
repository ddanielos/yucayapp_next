'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from '@/styles/Contact.module.css';

const SERVICE_ID = process.env.NEXT_PUBLIC_REACT_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_REACT_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_REACT_PUBLIC_KEY;

export default function Contact(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, PUBLIC_KEY)
    .then(response => {
      console.log(response)
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch(error => console.log(error))
  }

  return(
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <section>
          <input
            type="text"
            name='user_name'
            value={name}
            onChange={(event)=> setName(event.target.value)}
            placeholder="Nombre *"
          />
        </section>
        <section>
          <input
            type="email"
            name='user_email'
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
            placeholder="Email *"
          />
        </section>
        <section>
          <textarea
            id="message"
            name='user_message'
            value={message}
            onChange={(event)=> setMessage(event.target.value)}
            placeholder="Déjanos un mensaje *"
          />
        </section>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
