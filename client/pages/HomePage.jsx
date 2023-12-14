import React from "react";
import Button from "react-bootstrap/Button";
import Lottie from "lottie-react";
import Animation1 from "../assets/animations/animation1.json";

import './stylePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {

  return (
    <main
      className="main"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmdCUyMGJveHxlbnwwfHwwfHx8MA%3D%3D')",
        backgroundSize: "cover",
      }}
    >



      <button className='create-btn' style={{
        fontFamily: "Caprasimo, serif"
      }} variant="outline-light" as="a" href="/authpage"
      >Create your gifty. box</button>









      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: '200px',
          width: '200px'
        }}
      >
        <Lottie animationData={Animation1} loop={true} />
      </div>

    </main>
  );
}
