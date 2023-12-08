import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

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
        <div className='nav' style={{
          borderRadius: "20px", position: 'absolute', top: 0, width: '100%', display: "flex", justifyContent: "center",
          alignItems: "center", paddingTop: "50px"
        }}>
          {/* <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar> */}

        </div>
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
          <div>
            <Button variant="danger" style={{
              fontSize: "45px",
              fontFamily: "Young Serif",
            }}>Create your gifty box</Button>{' '}
          </div>
        </div>
      </main>
    </>
  );
}