import React from 'react'

function PracticalExperience(props) {
    let { isComplete, change, index, add } = props;
    return (
        <form onSubmit={(e) => add(e, index)}>
        <input
          type="text"
          name="companyName"
          placeholder="company name"
          onChange={(e) => change(e, index)}
          value={props.companyName}
        />
        <input
          type="text"
          name="positionTitle"
          placeholder="position title"
          onChange={(e) => change(e, index)}
          value={props.positionTitle}
        />
        <input
          type="text"
          name="mainTasks"
          placeholder="main tasks"
          onChange={(e) => change(e, index)}
          value={props.mainTasks}
        />
        <input
          type="date"
          name="beginDate"
          placeholder="beginning date"
          onChange={(e) => change(e, index)}
          value={props.beginDate}
        />
        <input
          type="date"
          name="endDate"
          placeholder="last date"
          onChange={(e) => change(e, index)}
          value={props.endDate}
        />
        <button type="submit">Add</button>
      </form>
    )
}

export default PracticalExperience
