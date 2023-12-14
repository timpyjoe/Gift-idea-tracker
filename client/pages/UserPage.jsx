import { useRouteError } from "react-router-dom";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Animation2 from "../assets/animations/animation2.json";

import '../App.css'

import { useAppCtx } from "../utils/AppProvider";


import { useParams, Link } from "react-router-dom"

// import Giftee from "../../server/models/Giftee";
// import Container from "../../server/models/User"
// import User from "../../server/models/User"
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react'
import Button from 'react-bootstrap/Button';
// import router from "../../server/routes/api/userroutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./stylePage.css"


export default function UserPage() {
  // const [user, setUser] = useState({});
  const { id } = useParams();

  // const fetchData = async () => {
  //   const { data } = await router.getUserById(id);
  //   setUser(data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { user } = useAppCtx()
  // const formHolder = {
  //   "gifter": user._id
  // }



  const addNewGiftee = async () => {

    const newGiftee = await fetch("/api/giftee", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formHolder)
    }).then(response => response.json()
    ).then(data => {
      window.location.href = `/giftee/${data.payload._id}/edit`
    })
  }

  // const handleClick = async () => {
  //   await addNewGiftee();
  //   window.setTimeout(() => { window.location.href = `/giftee/${newGiftee._id}/edit`}, 500)
  // }




  const [giftees, setGiftees] = useState()

  const getGiftees = async () => {

    const userObj = fetch(`/api/user/${user._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response.json()
    }).then(function (data) {
      setGiftees(data.payload.giftees)
    })
  }
  useEffect(() => {

    if (user._id) {
      getGiftees()

    };
  }, [user._id])



  if (!user._id, !giftees) return <></>
  return (
    <>



  
      <div className="giftee-list">
        <Button className="create-giftee-btn" variant="danger" onClick={addNewGiftee}>Create New Giftee</Button>
        <h3>Giftees:</h3>
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
      </div>
      <section>
        <div className="gift-idea-container">
          <h2>Click here for more gifty ideas!</h2>

          <a className="url-link" href="https://pinterest.com" target="_blank" rel="noreferrer">
            Pinterest Inspiration
          </a>{" "}
          <br />
          <a className="url-link" href="https://target.com" target="_blank" rel="noreferrer">Target
          </a>{" "}
          <br />
          <a className="url-link" href="https://amazon.com" target="_blank" rel="noreferrer">Amazon
          </a>{" "}
          <br />
        </div>
      </section>

      {/* </div> */}
      < div style={{

        height: '400px',
        width: '400px'
      }
      }>
        <Lottie animationData={Animation2} loop={true} />

      </div >

    </>



    </>
  )
}







