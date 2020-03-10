import React, { Component } from 'react';
import { withAuth } from "../lib/Auth";
import reportService from '../lib/report-service';
import authService from '../lib/auth-service';
import queryString from 'query-string';

class CreateReport extends Component {
  constructor(props){
    super(props)
      this.state = { 
        motivation: "",
        type: "", 
        space: "", 
        description: "",
        time: "",
        date: "",
        location: []
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

    const values = queryString.parse(this.props.location.search)
    const { lng, lat } = values;
    this.setState({location:[Number(lng),Number(lat)]})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const {role, motivation, type, space, description, time, date, location} = this.state;
    const user = this.props.user._id;
    reportService.createReport(role, motivation, type, space, description, time, date, location, user);
    this.props.history.goBack()
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {role, motivation, type, space, description, time, date} = this.state;
    return (
      <div className="report-div">
        <h1>Report Form</h1>
        <p>Please fill in all the fields to make a report</p>
        <form onSubmit={this.handleFormSubmit}>
          <div>
          <hr></hr>
            <div className="update-report-div">
              <div className="update-report-form">
                <div className="form-item">
                  <label>Role: </label>
                  <select type="text"
                    name="role"
                    value={role}
                    onChange={this.handleChange}>
                    <option value=""> - Select - </option>
                    <option value="Victim">Victim</option>
                    <option value="Witness">Witness</option>
                  </select>
                </div>

                <div className="form-item">
                  <label>Motive: </label>
                  <select type="text"
                    name="motivation"
                    value={motivation}
                    onChange={this.handleChange}>
                    <option value=""> - Select - </option>
                    <option value="Sexist">Sexist</option>
                    <option value="Racist">Racist</option>
                    <option value="Homophobic">Homophobic</option>
                    <option value="Transphobic">Transphobic</option>
                    <option value="Islamophobic">Islamophobic</option>
                    <option value="Antisemitic">Antisemitic</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-item">
                  <label>Type: </label>
                  <select type="text"
                    name="type"
                    value={type}
                    onChange={this.handleChange}>
                    <option value=""> - Select - </option>
                    <option value="Verbal">Verbal</option>
                    <option value="Physical">Physical</option>
                  </select>
                </div>

                <div className="form-item">
                  <label>Space: </label>
                  <select type="text"
                    name="space"
                    value={space}
                    onChange={this.handleChange}>
                    <option value=""> - Select - </option>
                    <option value="Outside">Outside</option>
                    <option value="Inside">Inside</option>
                  </select>
                </div>

                <div className="form-item">
                  <label>Time: </label>
                  <input
                    type="time"
                    name="time"
                    value={time}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-item">
                  <label>Date: </label>
                  <input
                    className="date-input"
                    type="date"
                    name="date"
                    value={date}
                    onChange={this.handleChange}
                  />
                </div>

                </div>
                <div className="update-report-form">
                  <div className="form-item">
                    <label>Description: </label><br/>
                      <textarea
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                      />
                  </div>
                  <div className="submit-button-div">
                    <button className="submit-button" type="submit">Submit Report</button>
                  </div>
                </div>
              </div>
            </div>
        </form>
      </div>
    )
  }
}

export default withAuth(CreateReport);