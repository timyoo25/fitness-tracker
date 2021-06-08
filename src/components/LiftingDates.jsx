import { useState } from 'react'
import { Link } from "react-router-dom"
import { liftHistory } from "../services/api"



export default function LiftingDates() {

  const [liftEntries, setLiftEntries] = useState([])

// create two more routes (/dates and workoutHistory/:date) (App.js)
// create new component containing create single array combining lifts/cardio 
  //in WorkoutHistory.jsx and LiftingDates.jsx or in App.js and pass the props in both WH and LD
// create a for each loop to loop through the new array of 
  //combined lift/cardio to get unique dates in LiftingDates.jsx
// filter items from the large array to render information on page
  //in WorkoutHistory.jsx
    // using params (to filter): use params to grab the date from the 
      // path in order to filter the large array in WorkoutHistory.jsx

  
  return (
    <div>
      <Link to="/weightlifting/:date"> 
      <p>6/7/2021</p>
      </Link>
      <p>6/8/2021</p>
      <p>6/9/2021</p>
      <p>6/10/2021</p>
      <p>6/11/2021</p>
    </div>
  )
}

