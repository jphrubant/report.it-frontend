import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import authService from "../lib/auth-service";
import reportService from "../lib/report-service"
import userService from "../lib/user-service"

class Account extends Component {
  state = {
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

  handleDeleteReport = reportId => {  
    reportService.deleteReport(reportId)
  }

  handleAccountDelete = ( ) => {
    const user = this.state._id
    userService.userDelete(user)
    // reportService.deleteReport(this.state.reports)
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="account-div">
        
          <div>
          <h1>My reports</h1>
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
                  <button className="edit-button" onClick={this.handleDeleteReport.bind(this, oneReport._id)}>Delete</button>
                </div>
              </div>)
            })}
          </div>
          
          <div className="my-account-info">
          <h1>Account info</h1>
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
            <div className="submit-button-div">
                <button className="submit-button" onClick={this.handleAccountDelete}>Delete Account</button>
            </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Account);
