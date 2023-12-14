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
import 'bootstrap/dist/css/bootstrap.min.css';


export default function GifteePage() {
  // Make a fetch request for the data related to this giftee based on their id
  const [currentGifteeInfo, setCurrentGifteeInfo] = useState(null)

  // this is the id of the giftee
  const { id } = useParams()
  async function getGifteeInfo() {
    // store the response's value in some variable in the line below

    const data = await fetch(`/api/giftee/${id}`)// not sure if this is correct
      .then(function (response) {
        return response.json()
      }).then(function (data) {

        setCurrentGifteeInfo(data.payload);
      })



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
      <div className="giftee-info">
        <GifteeInfo currentGifteeInfo={currentGifteeInfo} />
      </div>

      <section className="gift-ideas">
        <GiftIdeas />
      </section>

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

    </main>
  )
}