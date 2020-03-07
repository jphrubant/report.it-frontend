import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Navbar extends Component {
  render() {
    const {logout, isLoggedIn} = this.props;
    return (
      <nav className="navbar">
        <Link to={"/"} class="nav-link">
          <h4 className="logo">Report.it</h4>
        </Link>
        {isLoggedIn ? (
          <div className="nav-div">
              <div className="button-div">
                <button className="navbar-button" onClick={logout}>Logout</button>
                <Link to='/account'>
                  <button className="navbar-button">My Account</button>
                </Link>
              </div>
              <p className="nav-instruction"> Click the map to make a report</p>
          </div>
        ) : (
          <>
            <div className="nav-div">
              <div className="button-div">
                <Link to="/login">
                  <button className="navbar-button">Login</button>
                </Link>
                
                <Link to="/signup">
                  <button className="navbar-button">Sign Up</button>
                </Link>
              </div>
              <p className="nav-instruction">Login or signup to make a report</p>
            </div>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
