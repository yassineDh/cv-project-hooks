import React, { useState } from "react";
import Practicalxperience from "./PracticalExperience";
import PracticalExperienceDisplay from "./PracticalExperienceDisplay";
import { v1 as uuidv1 } from "uuid";

function PracticalExperienceSection() {

  const praExp = {
    companyName: "",
    positionTitle: "",
    mainTasks: "",
    beginDate: "",
    endDate: "",
    isComplete: false,
  };


  const [practicalExperiences, setpraExp] = useState([]);

  function saveAll(e) {
    e.preventDefault();
    let completedArray = practicalExperiences.map((element) => {
      let newObj = Object.assign({}, element, { isComplete: true });
      return newObj;
    });
    setpraExp(completedArray);
  }

  function changeHandler(e, id) {
    let name = e.target.name;
    let value = e.target.value;
    let newArray = practicalExperiences.map((element) => {
      if (element.id == id) element[name] = value;
      return element;
    });
    setpraExp(newArray);
  }

  function updateHandler(e, id) {
    e.preventDefault();

    let newArray = practicalExperiences.map((element) => {
      if (element.id == id) element.isComplete = false;
      return element;
    });
    setpraExp(newArray);
  }

  function submitHandler(e, id) {
    e.preventDefault();
    let newArray = practicalExperiences.map((element) => {
      if (element.id == id) element.isComplete = true;
      return element;
    });
    setpraExp(newArray);
  }

  function addExperience() {
    let newEduExp = Object.assign({}, praExp);
    newEduExp.id = uuidv1();
    let cloneArray = [...practicalExperiences, newEduExp];
    setpraExp(cloneArray);
  }

  function deleteExprience(e, i) {
    e.preventDefault();
    let filtredArray = practicalExperiences.filter(
      (element) => element.id != i
    );
    setpraExp(filtredArray);
  }
  return (
    <React.Fragment>
      <fieldset>
        <legend>Practical experience section</legend>
        <button style={{ marginLeft: "700px" }} onClick={addExperience}>
          Add practicale experience
        </button>
        {practicalExperiences.map((element) => {
          if (element.isComplete) {
            return (
              <PracticalExperienceDisplay
                key={element.id}
                {...element}
                deleteExp={deleteExprience}
                update={updateHandler}
                index={element.id}
              />
            );
          }
          return (
            <Practicalxperience
              submit={saveAll}
              change={changeHandler}
              isComplete={element.isComplete}
              index={element.id}
              add={submitHandler}
              key={element.id}
              {...element}
            />
          );
        })}
      </fieldset>
      {practicalExperiences.length > 0 && (
        <button onClick={saveAll}>Save All</button>
      )}
    </React.Fragment>);
}

export default PracticalExperienceSection;
