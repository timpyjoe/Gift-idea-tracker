import React, { useReducer, useState } from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function GiftIdeas() {
  const [previousEntries, setPreviousEntries] = useState([])

  const [formData, setFormData] = useState({
    name: '',
    descrip: '',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setPreviousEntries([...previousEntries, formData])
    setFormData({ name: "", descrip: "" })
  };
  return (
    <div>
      <div className='gift-form'>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="descrip"
              value={formData.descrip}
              onChange={handleInputChange}
            />
          </label>
          <button className="gift-ideas-btn" type="submit">Enter Gift Idea</button>
        </form>
      </div>

      <div>
        {previousEntries.map(entry => (

          <ul>
            <li key={entry.name}></li>
            <li key={entry.descrip}></li>
          </ul>
        ))}
      </div>

    </div>

  );

};

