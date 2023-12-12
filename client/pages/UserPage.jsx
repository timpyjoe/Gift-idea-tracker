import { useRouteError } from "react-router-dom";
import { useEffect, useState } from "react";

// import Giftee from "../../server/models/Giftee";
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react'
import Button from 'react-bootstrap/Button';

import "./stylePage.css"


export default function User() {

  return (

    <main><h1 className="title">gifty.</h1>
      <h2 className="Welcome">Welcome to your gifty. box! </h2>


      <div className="container-box">
        <div className="giftee-list">
          <Button className="create-giftee" variant="danger">Create New Giftee</Button>
          <h2>Giftees:</h2>
          <li>Name of Giftee
            <a href="/giftee/:id"></a></li>
          <li>giftee 2</li>
          <li>giftee 3</li>
          <li>giftee 4</li>

        </div>
      </div>
      <section>
        <h6>Click here for more gifty. ideas!</h6>
        <a href="https://pinterest.com" target="_blank"></a>
        <a href="https://target.com" target="_blank"></a>
        <a href="https://amazon.com" target="_blank"></a>
      </section>
    </main>




    // when we list the giftees, we will link to the Gftee page for each like this: 




  )
}