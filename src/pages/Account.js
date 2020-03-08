import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import authService from "../lib/auth-service";
import reportService from "../lib/report-service"

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

  componentDidUpdate(){
    authService.me()
    .then((data) => {
    this.setState({...data})
    })
    .catch(err => {
    console.log(err)
    })
  }

  componentDidMount(){
    authService.me()
    .then((data) => {
        this.setState({...data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleDelete = reportId => {  
    reportService.deleteReport(reportId)
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
            <div key={oneReport._id} className="report-item">
      
              <div className="incident">
                <p > {oneReport.motivation} incident</p> 
              </div>

              <div className="edit-button-div">
                <Link to={`/edit-report/${oneReport._id}`}>
                  <button className="edit-button">Edit</button>
                </Link>
                <button className="edit-button" onClick={this.handleDelete.bind(this, oneReport._id)}>Delete</button>
              </div>
            </div>)
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Account);
