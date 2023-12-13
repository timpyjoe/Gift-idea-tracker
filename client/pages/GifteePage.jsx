import { createRoutesFromChildren, useRouteError } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom"

import CreateGiftee from "../components/GifteeForm";

// import Giftee from "../../server/models/Giftee";
import { Card } from 'react-bootstrap';
import { CardGroup } from "react-bootstrap";

import Button from 'react-bootstrap/Button';

import { useParams } from "react-router-dom";
import "./stylePage.css"


export default function GifteePage() {

  return (
    <main><h1 className="title">gifty.</h1>
      <h2 className="Welcome">Welcome to your gifty. box! </h2>


      <div className="container-box">
        <div className="giftee-list">

          <CreateGiftee />
          {/* <Button className="create-giftee" variant="danger">Create New Giftee</Button>
          <h2>Giftees:</h2>
          <li>Name of Giftee
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
  )
}
// this is the id of the giftee
// const { id } = useParams()


// Make a fetch request for the data related to this giftee based on their id
// const [currentGifteeInfo, setCurrentGifteeInfo] = useState(null)

//   async function getGifteeInfo() {
//     // store the response's value in some variable in the line below
//     await fetch("/api/giftee/:id")  // not sure if this is correct
//     // what are you going to do once you have the giftee's information
//     // that you fetched from the backend?
//     // well, you want to store it in state, the currentGifteeInfo state variable
//     // run your setCurrentGifteeInfo setter function somwhere here, to update
//     // your state variable. That way, you actually render the GifteePage

//   }

//   useEffect(() => {
//     getGifteeInfo()
//   }, [])

//   if (!currentGifteeInfo) return <></>

//   // divide your main section into two different <section> elements
//   // one is the about and likes, the other is the giftee's list of gifts.
//   return (
//     <main
//       className="main-container"
//     >
//       <h2 className="about-likes-container">About and Likes</h2>
//       <p>Name: {currentGifteeInfo.name}
//         Birthday: {currentGifteeInfo.birthday}
//         Gifter: {currentGifteeInfo.gifter}
//         Relationship: {currentGifteeInfo.relationship}
//         // how to figure out favorites//
//         Colors: {currentGifteeInfo.colors}
//         Music: {currentGifteeInfo.music}
//         Flowers: {currentGifteeInfo.flowers}
//         Clothes: {currentGifteeInfo}
//         Food and Snacks: {currentGifteeInfo.foodSnacks}
//         Candy: {currentGifteeInfo.candy}
//         Coffee or Tea: {currentGifteeInfo.coffeetea}
//         Stores: {currentGifteeInfo.stores}
//         Beverages: {currentGifteeInfo.beverages}
//         Movies: {currentGifteeInfo.movies}
//         Shows: {currentGifteeInfo.shows}
//         Scents: {currentGifteeInfo.scents}
//         Accessories: {currentGifteeInfo.accessories}
//         Dessert: {currentGifteeInfo.dessert}
//         Sports: {currentGifteeInfo.sports}
//         // how to figure out sizes //
//         Shirt or Top: {currentGifteeInfo.shirttop}
//         Pants or Bottom: {currentGifteeInfo.pantsbottom}
//         Dress: {currentGifteeInfo.dress}
//         Shoe: {currentGifteeInfo.shoe}
//         Ring: {currentGifteeInfo.ring}
//         Hobbies: {currentGifteeInfo.hobbies}
//         Collections: {currentGifteeInfo.collections}
//         Don't Need: {currentGifteeInfo.dontneed}
//         Extra Ideas: {currentGifteeInfo.blank}



//       </p>

//       <CardGroup className="gift-list-container">
//         <h2 > List of Gifts</h2 >
//         <Card className="list-items">
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural lead-in
//               to additional content. This content is a little bit longer.
//             </Card.Text>
//           </Card.Body>
//         </Card>


//         <Card className="list-items">
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This card has supporting text below as a natural lead-in to
//               additional content.{' '}
//             </Card.Text>
//           </Card.Body>

//         </Card>
//         <Card className="list-items">
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural lead-in
//               to additional content. This card has even longer content than the
//               first to show that equal height action.
//             </Card.Text>
//           </Card.Body>

//         </Card>
//       </CardGroup>

//     </main >
//   )
// }
