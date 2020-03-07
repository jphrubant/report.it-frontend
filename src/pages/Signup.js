import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Signup extends Component {
  state = { 
    email: "", 
    password: "",
    dateOfBirth: "",
    sex: "",
    sexualOrientation: "",
    ethnicity: "",
    nationality: ""
   };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password, dateOfBirth, sex, sexualOrientation, ethnicity, nationality } = this.state;
    this.props.signup(email, password, dateOfBirth, sex, sexualOrientation, ethnicity, nationality);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, dateOfBirth, sex, sexualOrientation, ethnicity, nationality } = this.state;
    return (
      <div className="form-div auth-form">
        <h1>Create an Account</h1>
        <p>Only fields marked with a * are mandatory</p>
        <form onSubmit={this.handleFormSubmit}>
        <div className="form-cluster">
        <div className="form-item">
          <label>email:*</label>
          <input
            className="email-input"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          </div>

          <div className="form-item">
          <label>Password:*</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          </div>
          <hr />

          <div className="form-item">
          <label>Date of birth</label>
          <input
            className="dob-input"
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={this.handleChange}
          />
          </div>

          <div className="form-item">
          <label>Sex:</label>
          <select 
            className="select-input"
            type="text"
            name="sex"
            value={sex}
            onChange={this.handleChange}>
            <option value=""> - Select - </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Trans">Trans</option>
            <option value="Intersex">Intersex</option>
            <option value="Other">Other</option>
          </select>
          </div>

          <div className="form-item">
          <label>Sexual Orientation:</label>
          <select 
            className="select-input"
            type="text"
            name="sexualOrientation"
            value={sexualOrientation}
            onChange={this.handleChange}>
            <option value=""> - Select - </option>
            <option value="Heterosexual">Heterosexual</option>
            <option value="Homosexual">Homosexual</option>
            <option value="Bisexual">Bisexual</option>
            <option value="Asexual">Asexual</option>
            <option value="Other">Other</option>
          </select>
          </div>

          <div className="form-item">
          <label>Ethnicity:</label>
          <select 
            className="select-input"
            type="text"
            name="ethnicity"
            value={ethnicity}
            onChange={this.handleChange}>
            <option value=""> - Select - </option>
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
          </div>
          
          <div className="submit-button-div">
            <button className="submit-button" type="submit">Sign up</button>
          </div>
        </form>
        <p>Already have account? <Link to={"/login"}> Login</Link></p>
      </div>
    );
  }
}

export default withAuth(Signup);
