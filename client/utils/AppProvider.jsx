import Cookie from "js-cookie"
import { createContext, useContext, useEffect, useState } from "react"

// Create the context itself
const AppContext = createContext({})

// Create a React hook that will allow other components to use the context 
export const useAppCtx = () => useContext(AppContext)

export default function AppProvider(props) {

  const [user, setUser] = useState({})
  const [form, setForm] = useState({
    name: "",
    relation: "",
    birthday: "",
    tops: "",
    bottoms: "",
    shoes: "",
    color: "",
    flower: "",
    food: "",
    sports: "",
    cards: ""
  });

  async function verifyUser() {
    const cookie = Cookie.get("auth-cookie")

    if (!cookie && window.location.pathname !== "/" && !window.location.pathname.includes("/auth")) {
      window.location.href = "/authpage"
    }

    try {
      const query = await fetch("/api/user/verify")
      const response = await query.json()
      if (response.result === "success") {
        setUser(response.payload)
      }
    } catch (err) {
      if (window.location.pathname !== "" && !window.location.pathname.includes("/auth")) {
        window.location.href = "/authpage"
      }
    }
  }

  useEffect(() => {
    verifyUser()
  }, [])


  return (
    <AppContext.Provider value={{ user, verifyUser, form, setForm }}>
      {props.children}
    </AppContext.Provider>
  )
}