// import { useState, useEffect } from "react"
import Auth from "../components/Auth"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from "lottie-react";
import '../App.css'
import Animation2 from "../assets/animations/animation2.json";

export default function AuthPage() {


  return (

    <>
      <div className="auth-style">



        <div className="auth-container">
          <div className="sign-up">
            <Auth usage="signup" />
          </div>


          <div className="log-in">
            <Auth usage="login" />
          </div>
        </div >
      </div>


      <div className="lottie-2" style={{
        height: '400px',
        width: '400px'
      }}>

        <Lottie animationData={Animation2} loop={true} />

      </div>
    </div>

  )
}
// d - flex gap - 5        
{/* <div style={{
          height: '400px',
          width: '400px'
        }}> */}