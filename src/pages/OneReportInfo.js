import React, { Component } from 'react';
import { withAuth } from "../lib/Auth";
import reportService from "../lib/report-service";
import { Link } from "react-router-dom";
import ReactMapGL, {Marker} from 'react-map-gl';

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
      toggleReport: false
    }
  }

  showReport = () => {
    this.state.toggleReport === false 
    ? this.setState({toggleReport: true}) 
    : this.setState({toggleReport: false})
  }

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
      <Marker key={this.props.oneReport._id} longitude={this.props.oneReport.location[0]} latitude={this.props.oneReport.location[1]}>
        <button className="pin-button" onClick={this.showReport}><img className="pin" src="./pin.png" alt="pin" /></button>
          {this.state.toggleReport 
          ?
          <div className="report-div">
            <h3>Report information</h3>
            <hr></hr>
            <p>Motive: {this.state.motivation}</p>
            <p>Type: {this.state.type}</p>
            <p>Space: {this.state.space}</p>
            <p>Time: {this.state.time}</p>
            <p>Date: {this.state.date}</p>
            <p>Description: {this.state.description}</p>
          </div>
            :
            null
          }
        </Marker>
      </div>
    )
  }
}

export default withAuth(OneReportInfo);
