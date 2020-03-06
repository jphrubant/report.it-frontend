import React from 'react'
import Map from "./../components/Map"
import { Link } from "react-router-dom";

function Home() {
  
  return (
    <div> 
      <h1>Main Page</h1>
      <p> Here you can view the map of all reports</p>
      <Map />

      <Link to="/create-report">
          <button>Report an incident</button>
        </Link>

    </div>
  )
}

export default Home;