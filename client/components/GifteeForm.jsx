import React, { useState } from "react";

import { useNavigate } from "react-router";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function CreateGiftee() {
  const [form, setForm] = useState({
    name: "",
    relation: "",
    birthday: "",
    tops: "",
    bottoms: "",
    shoes: "",
    color: "",
    flower: "",
    food: "",
    sports: "",
    cards: ""
  });
  const navigate = useNavigate();

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
      relation: "",
      birthday: "",
      tops: "",
      bottoms: "",
      shoes: "",
      color: "",
      flower: "",
      food: "",
      sports: "",
      cards: ""
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
            <Form.Control placeholder="Relation" />
          </Col>
          <Col>
            <Form.Control placeholder="Birthday" />
          </Col>
          <Col>
            <Form.Control placeholder="Shirts or tops size" />
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



