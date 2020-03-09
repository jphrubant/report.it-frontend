import React, { Component } from 'react';
import { withAuth } from "../lib/Auth";
import reportService from "../lib/report-service";
import { Link } from "react-router-dom";

class OneReportInfo extends Component {
  constructor(props){ 
  super(props)
  this.state = { 
    role: "",  
    motivation: "",
    type: "", 
    space: "", 
    description: "",
    time: "",
    date: "",
  }
}

  componentDidMount () {
    const reportId = this.props.match.params.id
    reportService.oneReport(reportId)
      .then((data) => {
      this.setState({...data})
      })
      .catch(err => {
      console.log(err)
      })
  };
  
  render() { 
    return (
      <div className="report-div">
        <div>
          <h1>Report information</h1>
          <hr></hr>
        </div>
        <p>Motive: {this.state.motivation}</p>
        <p>Type: {this.state.type}</p>
        <p>Space: {this.state.space}</p>
        <p>Time: {this.state.time}</p>
        <p>Date: {this.state.date}</p>
        <p>Description: {this.state.description}</p>
        <Link to="/"> 
            <button className="submit-button"> Back to map </button>
        </Link>
      </div>
    )
  }
}

export default withAuth(OneReportInfo);
