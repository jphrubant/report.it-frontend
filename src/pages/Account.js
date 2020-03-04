import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class Account extends Component {
  render() {
    return (
      <div>
        <h1>Account area</h1>
        <h1>Welcome {this.props.user.email}</h1>
        <p>Here you can view your reports and update your account info</p>
      </div>
    );
  }
}

export default withAuth(Account);
