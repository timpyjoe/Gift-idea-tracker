// import { useRouteError } from "react-router-dom";
// import { useEffect, useState } from "react";

// import Giftee from "../../server/models/Giftee";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react'
import Stack from 'react-bootstrap/Stack';
import "./style.css"

function GifteePage() {
  return (



    <main
      className="main-container"
    //   style={{
    //     display: 'flex',
    //     left- component
    //     // justifyContent: 'flex-start',
    //     // alignItems: 'center',
    //     height: '100vh',
    // border: '1px solid green',
    //   }}

    ><h2 className="about-likes-container">About and Likes</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <CardGroup className="gift-list-container">  <h2> List of Gifts</h2 >

        <Stack gap={2} className="col-md-5 mx-auto">
          <Card className="list-items">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Stack>

        <Card className="list-items">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>

        </Card>
        <Card className="list-items">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>

        </Card>
      </CardGroup>

    </main >

  )
}
export default GifteePage