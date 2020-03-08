import React, { Component } from 'react'
import { withAuth } from "../lib/Auth"
import reportService from "./../lib/report-service"

 class EditReport extends Component {
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

  handleFormSubmit = event => {
    event.preventDefault();
    const {_id, role, motivation, type, space, description, time, date, location} = this.state;
    reportService.updateReport(_id, {role, motivation, type, space, description, time, date, location});
    this.props.history.push("/account")
  };

  handleChange = event => {
    const { name, value } = event.target; 
    this.setState({ [name]: value });
  };

    render() {
        const {role, motivation, type, space, description, time, date} = this.state;
        return (
          <div className="report-div">
            <h1>Update Report</h1>
            <p>All fields must be filled to update report</p>
            <form onSubmit={this.handleFormSubmit}>
              <div>
              <hr></hr>
    
                <div className="form-item">
                  <label>You were the: </label>
                  <select 
                    type="text"
                    name="role"
                    value={role}
                    onChange={this.handleChange}>
                    <option value=""> - Select - </option>
                    <option value="Victim">Victim</option>
                    <option value="Witness">Witness</option>
                  </select>
                </div>
    
                <div className="form-item">
                  <label>Motivation: </label>
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
                <label>Description: </label><br/>
                  <textarea
                    rows="5" 
                    cols="30"
                    name="description"
                    value={description}
                    onChange={this.handleChange}
                  />
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
    
                <div className="submit-button-div">
                  <button className="submit-button" type="submit">Save change</button>
                </div>
    
              </div>
            </form>
          </div>
        )
      }
}

export default withAuth(EditReport);
