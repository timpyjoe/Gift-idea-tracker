import { createRoutesFromChildren, useRouteError } from "react-router-dom";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom"
import GiftIdeas from "../components/GiftIdeas"
import GifteeInfo from "../components/GifteeInfo";
import UpdateGiftee from "../components/GifteeForm";

// import Giftee from "../../server/models/Giftee";
// import { Card } from 'react-bootstrap';
// import { CardGroup } from "react-bootstrap";

import Button from 'react-bootstrap/Button';

import { useParams } from "react-router-dom";
import "./stylePage.css"


export default function GifteePage() {
  // Make a fetch request for the data related to this giftee based on their id
  const [currentGifteeInfo, setCurrentGifteeInfo] = useState(null)

  // this is the id of the giftee
  const { id } = useParams()
  async function getGifteeInfo() {
    // store the response's value in some variable in the line below
    const  data  = await fetch(`/api/giftee/${id}`)// not sure if this is correct
    .then(function(response){
      return response.json()
    }).then(function(data){

      setCurrentGifteeInfo(data.payload);
      console.log(data)
    })
    // what are you going to do once you have the giftee's information
    // that you fetched from the backend?
    // well, you want to store it in state, the currentGifteeInfo state variable
    // run your setCurrentGifteeInfo setter function somwhere here, to update
    // your state variable. That way, you actually render the GifteePage

  }

  useEffect(() => {
    getGifteeInfo()
  }, [])


  if (!currentGifteeInfo) return <></>


  // divide your main section into two different <section> elements
  // one is the about and likes, the other is the giftee's list of gifts.
  return (
    <main
      className="main-container"
    >
      <GifteeInfo currentGifteeInfo={currentGifteeInfo}/>
      <UpdateGiftee currentGifteeInfo={currentGifteeInfo}/>
      
      <section className="gift-ideas">
        <GiftIdeas />
      </section>

      <section className="link-ideas">
        <h6>Click here for more gifty. ideas!</h6>
        <a href="https://pinterest.com" target="_blank"></a>
        <a href="https://target.com" target="_blank"></a>
        <a href="https://amazon.com" target="_blank"></a>
      </section>

    </main>
  )
}