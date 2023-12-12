import React, { useReducer, useState } from 'react';


const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

function GiftIdeas() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (


    <div className="wrapper">
      <h1>Gift Ideas:</h1>
      {submitting &&
        <div>
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>:{value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Gift Ideas:</p>
            <input name="name" onChange={handleChange} />
          </label>
          <label>
            <p>Description:</p>
            <input type="textarea" name="value" onChange={handleChange} />
          </label>
        </fieldset>
        <button type="submit">Enter Gift Idea</button>
      </form>
    </div>
  )
};

export default GiftIdeas;

// Save the file.When you do the page will refresh and you’ll be able to enter data.

// Now that you are collecting the form state, update the user display message to show the data in an unordered list(<ul>) element.

//   Convert the data to an array using Object.entries, then map over the data converting each member of the array to an <li> element with the name and the value. Be sure to use the name as the key prop for the element: //
