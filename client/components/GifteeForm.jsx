import React, { useState } from "react";

import { useNavigate } from "react-router";
import { useAppCtx } from "../utils/AppProvider";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';

export default function UpdateGiftee() {

  const { user } = useAppCtx()
  const [form, setForm ] = useState({})

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e, userId) {
    e.preventDefault();
    console.log(userId)

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newGiftee = { ...form };

    await fetch("/api/giftee/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form),
    })
      .then (console.log("submitted!"))
      .catch(error => {
        window.alert(error);
        return;
      });

    setForm({
      name: "",
      birthday: "",
      gifter: userId,
      relationship: "",
      tops: "",
      bottoms: "",
      favorites: { 
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
      },
      sizes: {
        shirttop: "",
        pantsbottom: "",
        dress: "",
        shoe: "",
        ring: "",
      }, // how to link sizes to clothes--
      hobbies: "",
      collections: "",
      dontneed: "",
      blank: ""
    });

    navigate("/giftee");

  }

  // This following section will display the form that takes the input from the user.



  if( !user._id ) return <></>
  return (
    <div>
      <h3>Create a New Giftee!</h3>

      <Form onSubmit={(e) => onSubmit(e, user._id)}>
        <Row>
          <Col>
            <Form.Control placeholder="Giftee name" />
          </Col>
          <Col>
            <Form.Control placeholder="Birthday" type="date" />
          </Col>
          {/* <Col>
            <Form.Control placeholder="Gifter" />
          </Col> */}
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
            <Form.Control placeholder="Music" />
          </Col>
          <Col>
            <Form.Control placeholder="Flowers" />
          </Col>
          <Col>
            <Form.Control placeholder="Clothes" />
            <Col>
              <Form.Control placeholder="Food or Snacks" />
            </Col>
            <Col>
              <Form.Control placeholder="Candy" />
              <Col>
                <Form.Control placeholder="Coffee or Tea" />
              </Col>
              <Col>
                <Form.Control placeholder="Stores" />
              </Col>
              <Col>
                <Form.Control placeholder="Beverages" />
              </Col>
              <Col>
                <Form.Control placeholder="Movies" />
              </Col>
              <Col>
                <Form.Control placeholder="Shows" />
              </Col>
              <Col>
                <Form.Control placeholder="Scents" />
              </Col>
              <Col>
                <Form.Control placeholder="Accessories" />
              </Col>
              <Col>
                <Form.Control placeholder="Desserts" />
              </Col>
              <Col>
                <Form.Control placeholder="Sports or Sports Team" />
              </Col>
              <Col>
                <label>Sizes:</label>
                <Form.Control placeholder="Shirt or Top" />
              </Col>
              <Col>
                <Form.Control placeholder="Pants or Bottoms" />
              </Col>
              <Col>
                <Form.Control placeholder="Dress" />
              </Col>
              <Col>
                <Form.Control placeholder="Shoe" />
              </Col>
              <Col>
                <Form.Control placeholder="Ring" />
              </Col>
              <Col>
                <Form.Control placeholder="Hobbies..." />
              </Col>
              <Col>
                <Form.Control placeholder="Collections..." />
              </Col>
              <Col>
                <Form.Control placeholder="Don't Need..." />
              </Col>
              <Col>
                <Form.Control placeholder="Coffee or Tea" />
              </Col>
              <Col>
                <Form.Control placeholder="Ideas for gift cards, crafts, diy gifts and more!" />
              </Col>
            </Col>
          </Col>
        </Row>

        <Button variant="danger" type="submit">Submit</Button>

      </Form>
    </div>
  )
};



