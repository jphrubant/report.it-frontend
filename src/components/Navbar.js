import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Navbar extends Component {
  render() {
    const {logout, isLoggedIn} = this.props;
    return (
      <nav className="navbar">
        <Link to={"/"} id="home-btn">
          <h4>Home</h4>
        </Link>
        {isLoggedIn ? (
          <>
            <p>Welcome back.</p> <br/>
            <p> Click the map to make a report</p>
            { /*You are logged in with {this.props.user.email} */}
            <button onClick={logout}>Logout</button>
            <Link to='/account'>
              <button>My Account</button>
            </Link>
          </>
        ) : (
          <>
            <p>Welcome</p> <br/>
            <p>Signup or Login to make a report</p>
            <Link to="/login">
              {" "}
              <button className="navbar-button">Login</button>
              {" "}
            </Link>
            <br />
            <Link to="/signup">
              {" "}
              <button className="navbar-button">Sign Up</button>
              {" "}
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
