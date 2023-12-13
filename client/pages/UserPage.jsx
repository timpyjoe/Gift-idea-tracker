import { useRouteError } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAppCtx } from "../utils/AppProvider";

// import Giftee from "../../server/models/Giftee";
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react'
import Button from 'react-bootstrap/Button';

import "./stylePage.css"


export default function User() {

  const { user } = useAppCtx()
  console.log(user._id)
  const formHolder = {
    "gifter": user._id
  }


  const addNewGiftee = async () => {
    const newGiftee = await fetch("/api/giftee", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formHolder)
    })
    console.log(newGiftee);
  }

  const [giftees, setGiftees] = useState()

  const getGiftees = async () => {

    const userObj = fetch(`/api/user/${user._id}`, {
      method:"GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response){
      return response.json()
    }).then(function(data){
      console.log(data.payload.giftees)
      setGiftees(data.payload.giftees)
    })
  }
  useEffect(() => {
    
    if (user._id){
      getGiftees()
      
    };
    }, [user._id])
  


  if( !user._id, !giftees ) return <></>
  return (

    <main><h1 className="title">gifty.</h1>
      <h2 className="Welcome">Welcome to your gifty. box! </h2>


      <div className="container-box">
        <div className="giftee-list">
          <Button className="create-giftee" variant="danger" onClick={addNewGiftee}>Create New Giftee</Button>
          <h2>Giftees:</h2>
          <ul>
            {giftees.map((person) => 
              <li key={person._id}>
                <a href={`/giftee/${person._id}`}>
                  {person.name}
                </a>
              </li>
          )
            }
          </ul>
          {/* <li>Name of Giftee
            <a href="/giftee/:id"></a></li>
          <li>giftee 2</li>
          <li>giftee 3</li>
          <li>giftee 4</li> */}

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