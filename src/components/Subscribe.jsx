import { useState } from 'react'

const fetchSubscribe = (name, email) => {
  return fetch('http://44.212.214.88:1337/api/beerlovers',{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      data: {
            name,
            email,
          },
        }),
      })
    }

export async function Subscribe (){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      const subscription = await fetchSubscribe(name, email)
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Suscribir</button>

    </form>
  )
}
