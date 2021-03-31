import React from 'react'

function EducationalExperienceDisplay(props) {

    let {
        schoolName,
        titleStudy,
        beginDate,
        endDate,
        deleteExp,
        update,
        index,
      } = props;
    return (
        <div>
        <span style={{ marginLeft: "10px", marginRight: "10px" }}>
          {schoolName}
        </span>
        <span style={{ marginLeft: "10px", marginRight: "10px" }}>
          {titleStudy}
        </span>
        <span style={{ marginLeft: "10px", marginRight: "10px" }}>
          {beginDate}
        </span>
        <span style={{ marginLeft: "10px", marginRight: "10px" }}>
          {endDate}
        </span>
        <button
          type="button"
          onClick={(e) => update(e, index)}
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          Update
        </button>
        <button
          type="button"
          onClick={(e) => deleteExp(e, index)}
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          Delete
        </button>
      </div>
    )
}

export default EducationalExperienceDisplay;
