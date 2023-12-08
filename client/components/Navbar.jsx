import "./style.css"


import { Link } from 'react-router-dom';
import Nav from "./Nav";

function Navbar() {


  return (

    <Nav
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/authpage">
          Sign in
        </Link>,
        <Link key={3} className="nav-link text-light" to="/">
          Sign up
        </Link>,

      ]}
    />

  )
};

export default Navbar;