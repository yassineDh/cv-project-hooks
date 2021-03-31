import React, { useState } from "react";
import EducationalExperience from "./EducationalExperience";
import EducationalExperienceDisplay from "./EducationalExperienceDisplay";
import { v1 as uuidv1 } from "uuid";

function EducationalExperienceSection() {
  const eduExp = {
    schoolName: "",
    titleStudy: "",
    beginDate: "",
    endDate: "",
    isComplete: false,
  };
  const [educationalExperiences, setEduExp] = useState([]);

  function saveAll(e) {
    e.preventDefault();
    let completedArray = educationalExperiences.map((element) => {
      let newObj = Object.assign({}, element, { isComplete: true });
      return newObj;
    });
    setEduExp(completedArray);
  }

  function changeHandler(e, id) {
    let name = e.target.name;
    let value = e.target.value;
    let newArray = educationalExperiences.map((element) => {
      if (element.id == id) element[name] = value;
      return element;
    });
    setEduExp(newArray);
  }

  function updateHandler(e, id) {
    e.preventDefault();

    let newArray = educationalExperiences.map((element) => {
      if (element.id == id) element.isComplete = false;
      return element;
    });
    setEduExp(newArray);
  }

  function submitHandler(e, id) {
    e.preventDefault();
    let newArray = educationalExperiences.map((element) => {
      if (element.id == id) element.isComplete = true;
      return element;
    });
    setEduExp(newArray);
  }

  function addExperience() {
    let newEduExp = Object.assign({}, eduExp);
    newEduExp.id = uuidv1();
    let cloneArray = [...educationalExperiences, newEduExp];
    setEduExp(cloneArray);
  }

  function deleteExprience(e, i) {
    e.preventDefault();
    let filtredArray = educationalExperiences.filter(
      (element) => element.id != i
    );
    setEduExp(filtredArray);
  }
  return (
    <React.Fragment>
      <fieldset>
        <legend>Educational experience section</legend>
        <button style={{ marginLeft: "700px" }} onClick={addExperience}>
          Add educational experience
        </button>
        {educationalExperiences.map((element) => {
          if (element.isComplete) {
            return (
              <EducationalExperienceDisplay
                key={element.id}
                {...element}
                deleteExp={deleteExprience}
                update={updateHandler}
                index={element.id}
              />
            );
          }
          return (
            <EducationalExperience
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

      {educationalExperiences.length > 0 && (
        <button onClick={saveAll}>Save All</button>
      )}
    </React.Fragment>
  );
}

export default EducationalExperienceSection;
