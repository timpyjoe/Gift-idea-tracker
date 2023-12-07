import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function CreateGiftee() {
  const [form, setForm] = useState({
    name: "",
    relation: "",
    // level: "",
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
      .catch(error => {
        window.alert(error);
        return;
      });

    setForm({ name: "", relation: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Giftee</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="relation">Relation:</label>
          <input
            type="text"
            className="form-control"
            id="relation"
            value={form.relation}
            onChange={(e) => updateForm({ relation: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="about-likes">About Giftee and Likes: (Please input all that apply) </label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="text"
              name="AboutOptions"
              id="AboutBirthday"
              value="Birthday"
              checked={form.level === "Birthday"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="about-Birthday" className="form-check-label">Birthday:</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionJunior"
              value="Junior"
              checked={form.level === "Junior"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionJunior" className="form-check-label">Junior</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionSenior"
              value="Senior"
              checked={form.level === "Senior"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionSenior" className="form-check-label">Senior</label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create giftee"
            className="btn btn-primary" />
        </div>

      </form >
    </div >
  );
}