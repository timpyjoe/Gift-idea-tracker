import { useEffect } from "react"
import Cookie from "js-cookie"
import './stylePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Logout() {


  useEffect(() => {
    Cookie.remove("auth-cookie")
    window.location.href = "/"
  }, [])

  return (
    <>
    </>
  )
}