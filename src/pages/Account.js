import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";


class Account extends Component {
  render() {
    return (
      <div>
        <h1>Account area</h1>
        <h1>Welcome {this.props.user.email}</h1>
        <p>Here you can view your reports and update your account info</p>
        <Link to="/Edit-account">
          <button>Edit Account Information</button>
        </Link>

      </div>
    );
  }
}

export default withAuth(Account);
