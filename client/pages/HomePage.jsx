import React from 'react'
import Button from 'react-bootstrap/Button';





export default function HomePage() {

  // const navigate = useNavigate()
  // const handleClick = () => {
  //   console.log("hello, world");
  //   navigate("/authpage")
  // };

  return (
    <>
    <main
      className=""
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: "url('https://i.imgur.com/grKji6x.png')",
        backgroundSize: 'cover',
      }}
    >

      <Button as="a" href="http://localhost:5173/authpage">Create your gifty. Box</Button>



    </main >

</>
  )
}
