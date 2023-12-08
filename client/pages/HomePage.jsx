




import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



export default function HomePage() {
  return (
    <>
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

        <Navbar />


        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1
            className="header"
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: '100px',
              fontFamily: 'Cooper Std'

            }}
          >
            gifty.
          </h1>
          <Button variant="danger" onClick={handleShow} style={{
            fontSize: "45px",
            fontFamily: "Young Serif",
          }}>Create your gifty box</Button>
        </div>
      </main >
    </>
  );
}