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
        console.log(data);
        console.log('DATA.REPORTS', data.reports)
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

          <Link to={`/EditAccount/${this.props.user._id}`}>
            <div className="submit-button-div">
              <button class="submit-button">Edit Information</button>
            </div>
          </Link>

          <div>
            <h3>My reports</h3>
            {this.state.reports.map(oneReport => {
              console.log('ONE REPORT', oneReport.motivation)
              return (
                <ul>
                  <li key={oneReport._id}> {oneReport.motivation}</li>
                </ul>
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
