import React, { Component } from 'react';
import { withAuth } from "../lib/Auth";
import reportService from "../lib/report-service";
import {Marker} from 'react-map-gl';

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
      showReport: false
    }
  }

  showReport = () => {
    this.setState({showReport: !this.state.showReport})}

  componentDidMount () {
    const reportId = this.props.reportId
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
      <div>
      <Marker 
        key={this.props.oneReport._id} 
        longitude={this.props.oneReport.location[0]} 
        latitude={this.props.oneReport.location[1]}>
          <button className="pin-button" onMouseEnter={this.showReport} onMouseLeave={this.showReport}> <img className="pin" src="./pin.png" alt="pin" /></button>
          {this.state.showReport 
          ?
          <div className="one-report-div">
            <h3>Report details</h3>
            <hr></hr>
            <p>Motive: {this.state.motivation}</p>
            <p>Type: {this.state.type}</p>
            <p>Space: {this.state.space}</p>
            <p>Time: {this.state.time}</p>
            <p>Date: {this.state.date}</p>
            <p>Description:</p>
            <p className="one-report-description">{this.state.description}</p>
          </div>
            :
          null}
        </Marker>
      </div>
    )
  }
}

export default withAuth(OneReportInfo);
