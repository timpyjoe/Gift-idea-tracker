import React, { useState } from "react";

import { useNavigate } from "react-router";
import { useAppCtx } from "../utils/AppProvider";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import { Last } from "react-bootstrap/esm/PageItem";

export default function UpdateGiftee({ currentGifteeInfo }) {

  const { user } = useAppCtx()
  const [data, setData ] = useState(currentGifteeInfo)

  // These methods will update the state properties.
  function updateForm(value) {
    return setData((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e, userId) {
    e.preventDefault();
    console.log(userId)

    // When a post request is sent to the create url, we'll add a new record to the database.
    // const newGiftee = { ...form };

    await fetch(`/api/giftee/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: data,
    })
      .then (function(response) {
        return response.json()
      }).then(function(payload){
        console.log(payload)
      })
      .catch(error => {
        window.alert(error);
        return;
      });

    // setForm({
    //   name: "",
    //   birthday: "",
    //   gifter: userId,
    //   relationship: "",
    //   tops: "",
    //   bottoms: "",
    //   favorites: { 
    //     colors: "",
    //     flowers: "",
    //     clothes: "",
    //     foodSnacks: "",
    //     candy: "",
    //     coffeetea: "",
    //     stores: "",
    //     beverages: "",
    //     movies: "",
    //     shows: "",
    //     scents: "",
    //     accessories: "",
    //     dessert: "",
    //     sports: "",
    //   },
    //   sizes: {
    //     shirttop: "",
    //     pantsbottom: "",
    //     dress: "",
    //     shoe: "",
    //     ring: "",
    //   }, // how to link sizes to clothes--
    //   hobbies: "",
    //   collections: "",
    //   dontneed: "",
    //   blank: ""
    // });

    // navigate("/giftee");

  }

  // This following section will display the form that takes the input from the user.



  if( !user._id ) return <></>
  return (
    <div>
      <h3>Create a New Giftee!</h3>

      <Form onSubmit={(e) => onSubmit(e, user._id)}>
        <Row>
          <Col>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Giftee name" onChange={updateForm} />
          </Col>
          <Col>
            <Form.Label>Birthday</Form.Label>
            <Form.Control placeholder="Birthday" type="date" />
          </Col>
          <Col>
            <Form.Label>Relationship</Form.Label>
            <Form.Select placeholder="Relation/relationship">
              <option value="Friend">Friend</option>
              <option value="Family">Family</option>
              <option value="Coworker">Coworker</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Col>
            <label>Favorites</label>
          <Col>
            <Form.Label>Color(s)</Form.Label>
            <Form.Control placeholder="Colors" />
          </Col>
          <Col>
          <Form.Label>Music</Form.Label>
            <Form.Control placeholder="Music" />
          </Col>
          <Col>
            <Form.Label>Flowers</Form.Label>
            <Form.Control placeholder="Flowers" />
          </Col>
          <Col>
            <Form.Label>Clothes</Form.Label>
            <Form.Control placeholder="Clothes" />
          </Col>
          <Col>
            <Form.Label>Food/Snacks</Form.Label>
            <Form.Control placeholder="Food or Snacks" />
          </Col>
          <Col>
            <Form.Label>Candy</Form.Label>
            <Form.Control placeholder="Candy" />
          </Col>
          <Col>
            <Form.Label>Coffee/Tea</Form.Label>
            <Form.Control placeholder="Coffee or Tea" />
          </Col>
          <Col>
            <Form.Label>Stores</Form.Label>
            <Form.Control placeholder="Stores" />
          </Col>
          <Col>
            <Form.Label>Beverages</Form.Label>
            <Form.Control placeholder="Beverages" />
          </Col>
          <Col>
            <Form.Label>Movies</Form.Label>
            <Form.Control placeholder="Movies" />
          </Col>
          <Col>
            <Form.Label>Shows</Form.Label>
            <Form.Control placeholder="Shows" />
          </Col>
          <Col>
            <Form.Label>Scents</Form.Label>
            <Form.Control placeholder="Scents" />
          </Col>
          <Col>
            <Form.Label>Accessories</Form.Label>
            <Form.Control placeholder="Accessories" />
          </Col>
          <Col>
            <Form.Label>Desserts</Form.Label>
            <Form.Control placeholder="Desserts" />
          </Col>
          <Col>
            <Form.Label>Sports/Teams</Form.Label>
            <Form.Control placeholder="Sports or Sports Team" />
          </Col>
          <label>Sizes:</label>
          <Col>
            <Form.Label>Shirt/Top</Form.Label>
            <Form.Control placeholder="Shirt or Top" />
          </Col>
          <Col>
            <Form.Label>Pants/Bottoms</Form.Label>
            <Form.Control placeholder="Bottoms or pants size" />
          </Col>
          <Col>
            <Form.Label>Dress</Form.Label>
            <Form.Control placeholder="Dress" />
          </Col>
          <Col>
            <Form.Label>Shoes</Form.Label>
            <Form.Control placeholder="Shoe" />
          </Col>
          <Col>
            <Form.Label>Ring</Form.Label>
            <Form.Control placeholder="Ring" />
          </Col>

          <label>Misc</label>
          <Col>
            <Form.Label>Hobbies</Form.Label>
            <Form.Control placeholder="Hobbies..." />
          </Col>
          <Col>
            <Form.Label>Collections</Form.Label>
            <Form.Control placeholder="Collections..." />
          </Col>
          <Col>
            <Form.Label>Don't Need</Form.Label>
            <Form.Control placeholder="Don't Need..." />
          </Col>
          
        </Row>

        <Button variant="danger" type="submit">Submit</Button>

      </Form>
    </div>
  )
};



