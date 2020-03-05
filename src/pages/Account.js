import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import authService from "../lib/auth-service";

class Account extends Component {

  state = {
    id : '',
    email: '',
    // password: '',
    dateOfBirth: '',
    sex: '',
    sexualOrientation: '',
    ethnicity: '',
    nationality: '',
}

  componentDidMount(){
    // const user = authService.me()
    // console.log('USER', user)
    // console.log('this.props.user', this.props.user)
    authService.me()
    .then((data) => {
        console.log(data);
        this.setState({...data})
    })
    }

  render() {
    return (
      <div>
        <h1>Welcome to your account area</h1>
        <h2>Account info</h2>
        <ul>
          <li>Email:{this.state.email}</li>
          <li>Date of birth:{this.state.dateOfBirth}</li>
          <li>Sex: {this.state.sex}</li>
          <li>Sexual orientation:{this.state.sexualOrientation}</li>
          <li>Ethnicity: {this.state.ethnicity}</li>
          <li>Nationality{this.state.nationality}</li>
          <li>Reports: {this.state.reports}</li>
        </ul>
        <p>Here you can view your reports and update your account info</p>
        <Link to={`/EditAccount/${this.props.user._id}`}>
          <button>Edit Account Information</button>
        </Link>

      </div>
    );
  }
}

export default withAuth(Account);
