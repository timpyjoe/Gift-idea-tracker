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
        backgroundImage: "url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmdCUyMGJveHxlbnwwfHwwfHx8MA%3D%3D')",
        backgroundSize: 'cover',
      }}
    >

      <Button as="a" href="http://localhost:5173/authpage">Create your gifty. box</Button>



    </main >


  )
}
