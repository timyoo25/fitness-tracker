import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <nav>
        <h1>MyFitTrack</h1>
        <h3><Link to="/weightlifting/new">Weight Lifting Workout</Link></h3>
        <h3><Link to="/cardio/new">Cardio Workout</Link></h3>
        <h3><Link to="/cardio/:id">Cardio Example Entry</Link></h3>
        <h3><Link to="/weightlifting/:id">Weight Lifting Example Entry</Link></h3>
      </nav>
      <div>
        <img src="https://www.vippng.com/png/detail/180-1804072_weightlifting-powerlifting-png.png"
          onClick={() => {}}
          width="150"
          height="100"
          alt="lifting link"
        />
      </div>
      <div>
        <img src="https://www.freepnglogos.com/uploads/running/running-icon-transparent-running-images-vector-8.png"
          onClick={() => {}}
          width="100"
          height="100"
          alt="cardio link"
        />
      </div>
      <div>
        <img src=""></img>
      </div>
    </div>

  )
}
