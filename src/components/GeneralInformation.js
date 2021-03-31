import React, { useState } from "react";

function GeneralInformation() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  function submitHandler(e) {
    e.preventDefault();

    setIsComplete(true);
  }

  function updateHandler(e) {
    e.preventDefault();

    setIsComplete(false);
  }

  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    let methodName = "set" + name.charAt(0).toUpperCase() + name.slice(1);
    console.log(methodName);
    console.log(this);
    methodName(value);
  }
  let button = isComplete ? (
    <button type="button" onClick={updateHandler}>
      Update
    </button>
  ) : (
    <button type="submit">Add</button>
  );

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>General information</legend>
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            onChange={changeHandler}
            disabled={isComplete}
          />
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            onChange={changeHandler}
            disabled={isComplete}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={changeHandler}
            disabled={isComplete}
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="phone number"
            onChange={changeHandler}
            disabled={isComplete}
          />
        </fieldset>
        {button}
      </form>
    </React.Fragment>
  );
}

export default GeneralInformation;
