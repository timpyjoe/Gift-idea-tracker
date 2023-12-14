// import { useState, useEffect } from "react"
import Auth from "../components/Auth"
import "./stylePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from "lottie-react";
import Animation2 from "../assets/animations/animation2.json";
export default function AuthPage() {


  return (
    <>
      <div className="sign-up d-flex gap-5">
        <div>
          <Auth usage="signup" />
        </div>

        <div className="log-in">
          <Auth usage="login" />
        </div>
      </div>
      <div style={{
        height: '400px',
        width: '400px'
      }}>
        <Lottie animationData={Animation2} loop={true} />
      </div>
    </>
  )
}