import React from 'react'
import Button from 'react-bootstrap/Button';





export default function HomePage() {



  return (
    <main
      className="main"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: "url('https://i.imgur.com/3ocYD4J.png')",
        backgroundSize: 'cover',
      }}
    >

      <Button as="a" href="/authpage">Create your gifty. box</Button>



    </main >


  )
}
