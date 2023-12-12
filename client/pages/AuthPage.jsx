// import { useState, useEffect } from "react"
import Auth from "../components/Auth"
import "./stylePage.css"
export default function AuthPage() {


  return (
    <div className="d-flex gap-5">
      <div>
        <Auth usage="signup" />
      </div>

      <div>
        <Auth usage="login" />
      </div>
    </div>
  )
}