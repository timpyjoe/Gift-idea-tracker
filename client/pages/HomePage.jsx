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

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: "url('https://i.imgur.com/3ocYD4J.png')",
        backgroundSize: 'cover',

      }}
    >


      <button className='create-btn' style={{
        fontFamily: "Caprasimo, serif"
      }} variant="outline-light" as="a" href="/authpage"
      >Create your gifty. box</button>








      <div
        style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: '300px',
          width: '300px'
        }}
      >
        <Lottie animationData={Animation1} loop={true} />
      </div>

    </main>
  );

}
