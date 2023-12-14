import React from "react";
import Button from "react-bootstrap/Button";
import Lottie from "lottie-react";
import Animation1 from "../assets/animations/animation1.json";

import './stylePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {

  return (

    <main
      className="homepage-container"
    >
      <button className='create-btn' style={{
        fontFamily: "Caprasimo, serif", display: 'flex', justifyContent: 'center', alignItems: 'center'
      }} as="a" href="/authpage"
      >Create your gifty box</button>



      <div className="lottie-2"
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

