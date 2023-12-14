import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from "react-router";
import { useAppCtx } from "../utils/AppProvider";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./style.css"

import Button from 'react-bootstrap/Button';
import { Last } from "react-bootstrap/esm/PageItem";

export default function UpdateGiftee({ currentGifteeInfo }) {


  // const { user } = useAppCtx()
  const [data, setData ] = useState(currentGifteeInfo)


  // Updates the state when the "About Properties" are changed.
  function handleInputChange(e){
    setData({...data, [e.target.name]: e.target.value})
  }
  // Updates the state when any of the "favorites" fields are changed.
  function handleFavoritesChange(e){
    setData({...data,  favorites: {
      ...data.favorites, [e.target.name]:e.target.value}})
  }
  
  function handleSizesChange(e){
    setData({...data,  sizes: {
      ...data.sizes, [e.target.name]:e.target.value}})
  }
  // This function will handle the submission.
  function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    // const newGiftee = { ...form };

    const request = fetch(`/api/giftee/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })

      .then (function(response) {
        return response.json()
      }).then(function(payload){
        console.log(payload)
        window.location.href = `/giftee/${currentGifteeInfo._id}`
      })

      .catch(error => {
        console.log(error);
        return;
      });


  }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  // This following section will display the form that takes the input from the user.



  return (
    <div>
      <h3>Create a New Giftee!</h3>

      <Form onSubmit={(e) => onSubmit(e)}>
        <Row>
          <Col>
            <Form.Label>Name</Form.Label>
            <Form.Control  defaultValue={data.name} name="name" onChange={handleInputChange} />
          </Col>
          <Col>
            <Form.Label>Birthday</Form.Label>
            <Form.Control name="birthday" placeholder="Birthday" type="date" onChange={handleInputChange} />
          </Col>
          <Col>
            <Form.Label>Relationship</Form.Label>
            <Form.Select  defaultValue={data.relationship}  name="relationship" onChange={handleInputChange} >
              <option value="Friend">Friend</option>
              <option value="Family">Family</option>
              <option value="Coworker">Coworker</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Col>
        </Row>
            <h3><label style={{textDecoration: "underline", padding: "10px"}}>Favorites</label></h3>
        <Row>
          <Col>
            <Form.Label>Colors</Form.Label>
            <Form.Control  defaultValue={data.favorites.colors}  name="colors" onChange={handleFavoritesChange}  />
          </Col>
          <Col>
          <Form.Label>Music</Form.Label>
            <Form.Control  defaultValue={data.favorites.music}  name="music" onChange={handleFavoritesChange}  />
          </Col>
          <Col>
            <Form.Label>Flowers</Form.Label>
            <Form.Control  defaultValue={data.favorites.flowers}  name="flowers" onChange={handleFavoritesChange}  />
          </Col>
          <Col>
            <Form.Label>Clothes</Form.Label>
            <Form.Control  defaultValue={data.favorites.clothes}  name="clothes" onChange={handleFavoritesChange}  />
          </Col>
          <Col>
            <Form.Label>Food/Snacks</Form.Label>
            <Form.Control  defaultValue={data.favorites.foodSnacks}   name="foodSnacks" onChange={handleFavoritesChange} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Candy</Form.Label>
            <Form.Control  defaultValue={data.favorites.candy}  name="candy" onChange={handleFavoritesChange} />
          </Col>
          <Col>
            <Form.Label>Coffee/Tea</Form.Label>
            <Form.Control  defaultValue={data.favorites.coffeetea}  name="coffeetea" onChange={handleFavoritesChange}  />
          </Col>
          <Col>
            <Form.Label>Stores</Form.Label>
            <Form.Control  defaultValue={data.favorites.stores}  name="stores" onChange={handleFavoritesChange}  />
          </Col>
          <Col>
            <Form.Label>Beverages</Form.Label>
            <Form.Control  defaultValue={data.favorites.beverages}  name="beverages" onChange={handleFavoritesChange}  />
          </Col>
          <Col>
            <Form.Label>Movies</Form.Label>
            <Form.Control  defaultValue={data.favorites.movies}   name="movies" onChange={handleFavoritesChange} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Shows</Form.Label>
            <Form.Control  defaultValue={data.favorites.shows}  name="shows" onChange={handleFavoritesChange} />
          </Col>
          <Col>
            <Form.Label>Scents</Form.Label>
            <Form.Control  defaultValue={data.favorites.scents}   name="scents" onChange={handleFavoritesChange}  />
          </Col>
          <Col>
            <Form.Label>Accessories</Form.Label>
            <Form.Control  defaultValue={data.favorites.accessories}  name="accessories" onChange={handleFavoritesChange}  />
          </Col>
          <Col>
            <Form.Label>Desserts</Form.Label>
            <Form.Control  defaultValue={data.favorites.dessert}   name="dessert" onChange={handleFavoritesChange} />
          </Col>
          <Col>
            <Form.Label>Sports/Teams</Form.Label>
            <Form.Control  defaultValue={data.favorites.sports}  name="sports" onChange={handleFavoritesChange}  />
          </Col>
        </Row>
          <h3><label style={{textDecoration: "underline", padding: "10px"}}>Sizes:</label></h3>
        <Row>
          <Col>
            <Form.Label>Shirt/Top</Form.Label>
            <Form.Control  defaultValue={data.sizes.shirttop}   name="shirtop" onChange={handleSizesChange} />
          </Col>
          <Col>
            <Form.Label>Pants/Bottoms</Form.Label>
            <Form.Control  defaultValue={data.sizes.pantsbottom}   name="pantsbottom" onChange={handleSizesChange} />
          </Col>
          <Col>
            <Form.Label>Dress</Form.Label>
            <Form.Control  defaultValue={data.sizes.dress}   name="dress" onChange={handleSizesChange} />
          </Col>
          <Col>
            <Form.Label>Shoes</Form.Label>
            <Form.Control  defaultValue={data.sizes.shoe}   name="shoe" onChange={handleSizesChange} />
          </Col>
          <Col>
            <Form.Label>Ring</Form.Label>
            <Form.Control  defaultValue={data.sizes.ring}   name="ring" onChange={handleSizesChange} />
          </Col>

          <h3><label style={{textDecoration: "underline", padding: "10px"}}>Misc</label></h3>
          <Col>
            <Form.Label>Hobbies</Form.Label>
            <Form.Control as="textarea" defaultValue={data.hobbies}   name="hobbies" onChange={handleInputChange} />
          </Col>
          <Col>
            <Form.Label>Collections</Form.Label>
            <Form.Control as="textarea" defaultValue={data.collections}   name="collections" onChange={handleInputChange} />
          </Col>
          <Col>
            <Form.Label>Don't Need</Form.Label>
            <Form.Control as="textarea" defaultValue={data.dontneed}   name="dontneed" onChange={handleInputChange}  />
          </Col>
          
        </Row>

        <Button variant="danger" type="submit">Submit</Button>

      </Form>
    </div>
  )
};



