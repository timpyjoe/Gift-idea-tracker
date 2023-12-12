import { useRouteError } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
// import Giftee from "../../server/models/Giftee";
// import Container from "../../server/models/User"
// import User from "../../server/models/User"
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react'
import Button from 'react-bootstrap/Button';
// import router from "../../server/routes/api/userroutes";

import "./stylePage.css"


export default function UserPage() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const fetchData = async () => {
    const { data } = await router.getUserById(id);
    setUser(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container>
        {/* Conditionally render the full profile or a Loading string, depending on whether user data is available */}
        {user.name ? <User user={user} /> : <p>Loading...</p>}
      </Container>



      <main><h1 className="title">gifty.</h1>
        <h2 className="Welcome">Welcome to your gifty. box! </h2>


        <div className="container-box">
          <div className="giftee-list">
            <Link to="/giftee/add">
              <Button className="create-giftee" size="lg" variant="danger">Create New Giftee</Button> </Link>

            <h2>Giftees:</h2>
            <li>Name of Giftee
              <a href="/giftee/:id"></a></li>
            <li>giftee 2</li>
            <li>giftee 3</li>
            <li>giftee 4</li>

          </div>
        </div>
        <section className="idea-container">
          <h6>Click here for more gifty. ideas!</h6>
          <a href="https://pinterest.com" target="_blank"></a>
          <a href="https://target.com" target="_blank"></a>
          <a href="https://amazon.com" target="_blank"></a>
        </section>
      </main>
      <footer className="profile-footer">
        {/* Link the user back to the homepage. The to prop is used in place of an href */}
        <Link to="/">← Go Back</Link>
      </footer>
    </>

  )
}

// when we list the giftees, we will link to the Gftee page for each like this: 




