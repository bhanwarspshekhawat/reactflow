import React, { Component } from 'react'

class Reports extends Component {
  render() {
    return (
      <div className="Reports">
        <br />
        <br />
        <div className="magr4">
          <select class="form1" aria-label="Disabled select example" disabled>
            <option selected>Plan Vs Actual KEM Implementation</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <br />
          <select class="form1" aria-label="Disabled select example" disabled>
            <option selected>Overall Ageing report of KEM and ZEM-open and closed</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <br />
          <select class="form1" aria-label="Disabled select example" disabled>
            <option selected>Stakeholder wise Ageing report of open KEM and ZEM</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <br />
          <select class="form1" aria-label="Disabled select example" disabled>
            <option selected>Overall KEM </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <br />
          <select class="form1" aria-label="Disabled select example" disabled>
            <option selected>Count of KEM by KEM Status</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    )
  }
}
export default Reports