import React, { Component } from 'react';
import { withAuth } from "../lib/Auth";
import reportService from './../lib/report-service'
import authService from './../lib/auth-service'

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
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const {motivation, type, space, description, time, date, location} = this.state;
    const user = this.props.user._id;
    console.log('USEEEEEEEEER', user)
    reportService.createReport(motivation, type, space, description, time, date, location, user);
    this.props.history.push("/")
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {motivation, type, space, description, time, date} = this.state;
    return (
      <div>
        <h1>Report Form</h1>
        <p> Please fill the form below to report an incident</p>
        <p>All fields have to be filled to make a report</p>
        <form onSubmit={this.handleFormSubmit}>
        
          <label>Motivation:</label>
          <select type="text"
            name="motivation"
            value={motivation}
            onChange={this.handleChange}>
            <option value=""> Select </option>
            <option value="Sexist">Sexist</option>
            <option value="Racist">Racist</option>
            <option value="Homophobic">Homophobic</option>
            <option value="Transphobic">Transphobic</option>
            <option value="Islamophobic">Islamophobic</option>
            <option value="Antisemitic">Antisemitic</option>
            <option value="Other">Other</option>
          </select>
          <br />

          <label>Type:</label>
          <select type="text"
            name="type"
            value={type}
            onChange={this.handleChange}>
            <option value=""> Select </option>
            <option value="Verbal">Verbal</option>
            <option value="Physical">Physical</option>
          </select>
          <br />

          <label>Space:</label>
          <select type="text"
            name="space"
            value={space}
            onChange={this.handleChange}>
            <option value=""> Select </option>
            <option value="Outside">Outside</option>
            <option value="Inside">Inside</option>
          </select>
          <br />

          <label>Description:</label>
          <textarea
            rows="4" 
            cols="50"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
          <br />

          <label>Time</label>
            <input
              type="time"
              name="time"
              value={time}
              onChange={this.handleChange}
            />
          <br />

          <label>Date of incident</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={this.handleChange}
            />
          <br />
          <input type="submit" value="Submit report" />
        </form>
      </div>
    )
  }
}

export default withAuth(CreateReport);