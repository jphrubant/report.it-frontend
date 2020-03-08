import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import reportService from './../lib/report-service'
import { withAuth } from "./../lib/Auth";

const MAPBOX_TOKEN = "pk.eyJ1IjoianBocnViYW50IiwiYSI6ImNrN2V6MDgxYzEyY3AzZnBhOThhYmdreDIifQ.mefIMl5Hx9X-_5zopU7kNQ" // Set your mapbox token here

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
      filter: null
    };
  };

  componentDidMount () {
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
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onClick={this.mapClick}
        >


        {
          this.state.allReports.map(oneReport => {
            return (
              <Marker key={oneReport._id} longitude={oneReport.location[0]} latitude={oneReport.location[1]}>
                <img className="pin" src="./pin.png" alt="pin" />
              </Marker>
            );
          })
        }
      
        {(this.state.newPin && this.state.pinVisible) 
          ? (<Popup
              className="popup"
              longitude={this.state.newPin[0]}
              latitude={this.state.newPin[1]}
              closeButton={false} 
              closeOnClick={false}>
              {isLoggedIn ? (<Link to={`/create-report/?lng=${this.state.newPin[0]}&lat=${this.state.newPin[1]}`}>
                <button className="popup-button">- Report -</button>
              </Link>
              ) : (
                <Link to="/login"><button className="popup-button">- Login or signup to create a report -</button></Link>
              )}
            </Popup>)
            : null }
          <div>
            <p className="map-instruction"> Click the map to make a report</p>
          </div>
        </ReactMapGL>
      </div>
    );
  }
}

export default withAuth(Map);