import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

function giftIdeas() {
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
      <h1>Gift Ideas</h1>
      {submitting &&
        <div>Submtting Ideas...</div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
Save the file.When you do the page will refresh and you’ll be able to enter data.

Now that you are collecting the form state, update the user display message to show the data in an unordered list(<ul>) element.

  Convert the data to an array using Object.entries, then map over the data converting each member of the array to an <li> element with the name and the value. Be sure to use the name as the key prop for the element:

    form-tutorial/src/components/App/App.js
