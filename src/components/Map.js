import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ReactMapGL, {Popup} from 'react-map-gl';
import reportService from './../lib/report-service'
import { withAuth } from "./../lib/Auth";
import OneReportInfo from "../components/OneReportInfo"

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 41.386929,
        longitude: 2.169998,
        zoom: 12,
        bearing: 0,
        pitch: 0,
      },
      pinVisible: false,
      newPin: null, // <---- array of coordinates
      allReports: [],
      filter: [],
      value: ""
    };
  };

  componentDidMount () {
    this.updateReports()
  };

  updateReports = () => {
    reportService
      .allReports()
      .then(allReps => { 
        this.setState({allReports: allReps})
      })
      .catch(err => {
        console.log(err)
      });
  };

  mapClick = (event) => {
    const pinVisible = !this.state.pinVisible;
    this.setState({newPin: event.lngLat, pinVisible})
  };

  handleFilterChange = event => {
    const { value } = event.target;
    this.setState({ filter : value });
  };

  render() {
    const {isLoggedIn} = this.props;
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          width="100vw"
          height="100vh"
          mapStyle="mapbox://styles/jphrubant/ck7f0leta2c9x1ir08h3vzq3f"
          onViewportChange={viewport => this.setState({viewport})}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          onClick={this.mapClick}
        >
        
        {(this.state.filter.length === 0) 
        ? (this.state.allReports.map(oneReport => {
            return (<OneReportInfo key={oneReport._id}  reportId={oneReport._id} oneReport={oneReport} />)  
        })
        ) : (this.state.allReports.filter((oneReport) => {
             return oneReport.motivation === this.state.filter
             })
             .map(oneReport => {
              return(<OneReportInfo key={oneReport._id} reportId={oneReport._id} oneReport={oneReport} />)
            })
        )
        }
      
        {(this.state.newPin && this.state.pinVisible) 
          ? (<Popup
              className="popup"
              longitude={this.state.newPin[0]}
              latitude={this.state.newPin[1]}
              closeButton={false} 
              closeOnClick={false}>
              {isLoggedIn ? (
                <Link to={`/create-report/?lng=${this.state.newPin[0]}&lat=${this.state.newPin[1]}`}>
                  <button className="popup-button">- Report -</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="popup-button">- Login or signup to create a report -</button>
                </Link>
              )}
            </Popup>)
            : null }

              <div>
                <p className="map-instruction">Click the map to report</p>
              </div>
              
              <form className="filter-form"> 
                <select 
                  type="text"
                  name="filter"
                  className="map-filter"
                  value={this.state.value}
                  onChange={this.handleFilterChange}>
                    <option value="all"> - Filter - </option>
                    <option value="Sexist">Sexist</option>
                    <option value="Racist">Racist</option>
                    <option value="Homophobic">Homophobic</option>
                    <option value="Transphobic">Transphobic</option>
                    <option value="Islamophobic">Islamophobic</option>
                    <option value="Antisemitic">Antisemitic</option>
                    <option value="Other">Other</option>
                </select>
              </form>
        </ReactMapGL>
      </div>
    );
  }
}

export default withAuth(Map);