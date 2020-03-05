import React, {Component} from 'react';
import {render} from 'react-dom';
import ReactMapGL, {Marker} from 'react-map-gl';

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
        pitch: 0
      }
    };
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
      >
        
        <Marker latitude={41.388619} longitude={2.167949}>
                <button>PIN</button>
        </Marker>
      </ReactMapGL>
      </div>
    );
  }
}

export default Map;