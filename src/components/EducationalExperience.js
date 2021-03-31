import React from 'react'

function EducationalExperience(props) {

    let { isComplete, change, index, add } = props;
    return (
        <React.Fragment>
        <form onSubmit={(e) => add(e, index)}>
          <input
            type="text"
            name="schoolName"
            placeholder="school name"
            onChange={(e) => change(e, index)}
            value={this.props.schoolName}
          />
          <input
            type="text"
            name="titleStudy"
            placeholder="title of study"
            onChange={(e) => change(e, index)}
            value={this.props.titleStudy}
          />
          <input
            type="date"
            name="beginDate"
            placeholder="beginning date"
            onChange={(e) => change(e, index)}
            value={this.props.beginDate}
          />
          <input
            type="date"
            name="endDate"
            placeholder="last date"
            onChange={(e) => change(e, index)}
            value={this.props.endDate}
          />
          <button type="submit">Add</button>
        </form>
      </React.Fragment>
    )
}

export default EducationalExperience
