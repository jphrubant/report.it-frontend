import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ReactMapGL, {Marker, Popup} from 'react-map-gl';

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
      newPin: null // <---- array of coordinates
    };
  }

  mapClick = (event) => {
    const pinVisible = !this.state.pinVisible;
    this.setState({newPin: event.lngLat, pinVisible})
  }

  render() {
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          width="500px"
          height="500px"
          mapStyle="mapbox://styles/jphrubant/ck7f0leta2c9x1ir08h3vzq3f"
          onViewportChange={viewport => this.setState({viewport})}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onClick={this.mapClick}
        >

        <Marker longitude={2.167949} latitude={41.388619} >
          <button>PIN</button>
        </Marker>

        {(this.state.newPin && this.state.pinVisible) 
        ? (<Popup
          longitude={this.state.newPin[0]}
          latitude={this.state.newPin[1]}
          closeButton={false} 
          closeOnClick={false}>

            <Link to={`/create-report/?lng=${this.state.newPin[0]}&lat=${this.state.newPin[1]}`}>
              <button>Report an incident</button>
            </Link>

        </Popup>)
        : null }
        
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;