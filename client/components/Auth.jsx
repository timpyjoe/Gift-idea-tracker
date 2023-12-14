import { useEffect, useState } from "react"
import { useAppCtx } from "../utils/AppProvider"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Auth({ usage = "signup" }) {

  const appCtx = useAppCtx()

  const [userData, setUserData] = useState({ email: "", password: "" })

  function handleInputChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  async function handleFormSubmit(e) {
    e.preventDefault()
    const apiPath = (usage === "signup") ? "/" : `/auth`
    const finalPath = `/api/user${apiPath}`

    try {
      const query = await fetch(finalPath, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const response = await query.json()
      console.log(response)
      if (response.result === "success") {
        window.location.href = "/user"
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    setUserData({ ...userData, email: appCtx.user.email || "" })
  }, [appCtx])


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <h2>{usage === "signup" ? "Signup" : "Login"}</h2>
          <div>
            <div>
              <label className="d-block">Email Address</label>
              <input type="text" name="email" value={userData.email} onChange={handleInputChange} />
            </div>

            <div>
              <label className="d-block">Password</label>
              <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
            </div>
          </div>

          <button className="submit-btn" style={{
            fontFamily: "Caprasimo, serif"
          }} as="a" href="/user/:id">Submit Info</button>
        </div>
      </form>
    </div>
  )

}