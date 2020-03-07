import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import authService from "../lib/auth-service";

class Account extends Component {
  state = {
    id : '',
    email: '',
    dateOfBirth: '',
    sex: '',
    sexualOrientation: '',
    ethnicity: '',
    nationality: '',
    reports: []
}

  componentDidMount(){
    authService.me()
    .then((data) => {
        this.setState({...data})
    })
  }

  render() {
    return (
      <div className="account-div">
        <h1>Account info</h1>
        <div>
          <div className="account-section">
          <hr></hr>
            <ul>
              <li>Email: {this.state.email}</li>
              <li>Date of birth: {this.state.dateOfBirth}</li>
              <li>Sex: {this.state.sex}</li>
              <li>Sexual orientation: {this.state.sexualOrientation}</li>
              <li>Ethnicity: {this.state.ethnicity}</li>
              <li>Nationality: {this.state.nationality}</li>
            </ul>
          </div>

          <Link to={'/edit-account'}>
            <div className="submit-button-div">
              <button className="submit-button">Edit Information</button>
            </div>
          </Link>
          <h1>My reports</h1>
          <div>
            <hr></hr>
            {this.state.reports.map(oneReport => {
              return (
              <div className="report-item">

              <div className="incident">
                <p key={oneReport._id}> {oneReport.motivation} incident</p> 
              </div>

              <div className="edit-button-div">
                <button className="edit-button">Edit</button> 
                <button className="edit-button">Delete</button> 
              </div>

              </div>
              )
            }
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Account);
