import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="form-div auth-form">
        <h1>Login</h1>
        <form  onSubmit={this.handleFormSubmit}>
        <div>
         <hr></hr>
          <div className="form-item">
            <label>email: </label>
            <input
              className="email-input"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-item">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
        </div>

          <div className="submit-button-div">
            <button className="submit-button" type="submit" value="Login">Log into account</button>
          </div>

        </form>
        <p>Don't have an account yet? <Link to={"/signup"}>Signup!</Link></p>
      </div>
    );
  }
}

export default withAuth(Login);
