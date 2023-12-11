import React, { useState } from "react";

import { useNavigate } from "react-router";
import { useAppCtx } from "../utils/AppProvider";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function CreateGiftee() {



  const [form, setForm] = useState({
    name: "",
    birthday: "",
    gifter: "",
    relationship: "",
    tops: "",
    bottoms: "",
    favorites: "", // how to link favorites to the following--
    colors: "",
    flowers: "",
    clothes: "",
    foodSnacks: "",
    candy: "",
    coffeetea: "",
    stores: "",
    beverages: "",
    movies: "",
    shows: "",
    scents: "",
    accessories: "",
    dessert: "",
    sports: "",
    sizes: "", // how to link sizes to clothes--
    shirttop: "",
    pantsbottom: "",
    dress: "",
    shoe: "",
    ring: "",
    hobbies: "",
    collections: "",
    dontneed: "",
    blank: ""

  });

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newGiftee = { ...form };

    await fetch("http://localhost:30001/giftee/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGiftee),
    })
      .then
      .catch(error => {
        window.alert(error);
        return;
      });

    setForm({
      name: "",
      birthday: "",
      gifter: "",
      relationship: "",
      tops: "",
      bottoms: "",
      favorites: "", // how to link favorites to the following--
      colors: "",
      flowers: "",
      clothes: "",
      foodSnacks: "",
      candy: "",
      coffeetea: "",
      stores: "",
      beverages: "",
      movies: "",
      shows: "",
      scents: "",
      accessories: "",
      dessert: "",
      sports: "",
      sizes: "", // how to link sizes to clothes--
      shirttop: "",
      pantsbottom: "",
      dress: "",
      shoe: "",
      ring: "",
      hobbies: "",
      collections: "",
      dontneed: "",
      blank: ""
    });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create a New Giftee!</h3>

      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Giftee name" />
          </Col>
          <Col>
            <Form.Control placeholder="Birthday" />
          </Col>
          <Col>
            <Form.Control placeholder="Gifter" />
          </Col>
          <Col>
            <Form.Control placeholder="Relation/relationship" />
          </Col>
          <Col>
            <label>Favorites</label>
            <Form.Control placeholder="Colors" />
          </Col>
          <Col>
            <Form.Control placeholder="Bottoms or pants size" />
          </Col>
          <Col>
            <Form.Control placeholder="Bottoms or pants size" />
          </Col>
          <Col>
            <Form.Control placeholder="Favorite color" />
            <Col>
              <Form.Control placeholder="Favorite flower" />
            </Col>
            <Col>
              <Form.Control placeholder="Favorite candy, food, snack..." />
              <Col>
                <Form.Control placeholder="Sports team or sport" />
              </Col>
              <Col>
                <Form.Control placeholder="Ideas for gift cards, stores, restaurants..." />
              </Col>
            </Col>
          </Col>
        </Row>
        <Button variant="danger">Submit</Button>{'Submit'}
      </Form>
    </div>
  )
};



