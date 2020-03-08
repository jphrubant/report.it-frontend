import React, { Component } from "react";
import { withAuth } from "../lib/Auth";
import userService from "../lib/user-service"
import authService from './../lib/auth-service'

class EditAccount extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      dateOfBirth: '',
      sex: '',
      sexualOrientation: '',
      ethnicity: '',
      nationality: ''
  }
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

handleFormSubmit = event => {
  event.preventDefault();
  const { email, dateOfBirth, sex, sexualOrientation, ethnicity, nationality } = this.state;
  const id = this.props.user._id;
  userService.userEdit(id, email, dateOfBirth, sex, sexualOrientation, ethnicity, nationality);
  this.props.history.push("/account")
};

handleChange = event => {
  const { name, value } = event.target; 
  this.setState({ [name]: value });
};

render() {
  const { email, dateOfBirth, sex, sexualOrientation, ethnicity, nationality } = this.state;
  return (
   <div className="account-div">
    <h1>Edit Information</h1>
    <p>Only fields marked with a * are mandatory</p>
    <form onSubmit={this.handleFormSubmit}>
      <hr></hr>
      <div>
        <div className="form-item">
          <label>email:*</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            />
        </div>
        <hr></hr>

        <div className="form-item">
          <label>Date of birth</label>
          <input
            className="date-input"
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={this.handleChange}
          />
        </div>
    
        <div className="form-item">
          <label>Sex:</label>
          <select type="text"
            name="sex"
            value={sex}
            onChange={this.handleChange}>
            <option> - Select - </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Trans">Trans</option>
            <option value="Intersex">Intersex</option>
            <option value="Other">Other</option>
          </select>
        </div>
    
        <div className="form-item">
          <label>Sexual Orientation:</label>
          <select type="text"
            name="sexualOrientation"
            value={sexualOrientation}
            onChange={this.handleChange}>
            <option> - Select - </option>
            <option value="Heterosexual">Heterosexual</option>
            <option value="Homosexual">Homosexual</option>
            <option value="Bisexual">Bisexual</option>
            <option value="Asexual">Asexual</option>
            <option value="Other">Other</option>
          </select>
        </div>
    
        <div className="form-item">
        <label>Ethnicity:</label>
        <select type="text"
          name="ethnicity"
          value={ethnicity}
          onChange={this.handleChange}>
          <option> - Select - </option>
          <option value="White">White</option>
          <option value="Black">Black</option>
          <option value="Asian">Asian</option>
          <option value="Middle Eastern">Middle Eastern</option>
          <option value="Hispanic">Hispanic</option>
          <option value="Latinx">Latinx</option>
          <option value="Mixed">Mixed</option>
          <option value="Other">Other</option>
        </select>
        </div>
    
        <div className="form-item">
        <label>Nationality:</label>
        <input
          type="nationality"
          name="nationality"
          value={nationality}
          onChange={this.handleChange}
        />
        </div>

        <div className="submit-button-div">
          <button className="submit-button">Save Changes</button>
        </div>
      </div>
    </form>
  </div>)
  }
}

export default withAuth(EditAccount);