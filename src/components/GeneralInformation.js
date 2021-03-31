import React, { useState } from "react";

function GeneralInformation() {
  const [generalInformation, setGeneralInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    isComplete: false,
  });

  function submitHandler(e) {
    e.preventDefault();

    setGeneralInformation({...generalInformation,isComplete: true})
  }

  function updateHandler(e) {
    e.preventDefault();

    setGeneralInformation({...generalInformation,isComplete: false})
  }

  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    
    setGeneralInformation({...generalInformation,[name]: value})
  }
  let button = generalInformation.isComplete ? (
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
            disabled={generalInformation.isComplete}
          />
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            onChange={changeHandler}
            disabled={generalInformation.isComplete}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={changeHandler}
            disabled={generalInformation.isComplete}
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="phone number"
            onChange={changeHandler}
            disabled={generalInformation.isComplete}
          />
        </fieldset>
        {button}
      </form>
    </React.Fragment>
  );
}

export default GeneralInformation;
