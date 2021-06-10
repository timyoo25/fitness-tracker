import { useState } from "react"
import NewLift from "./NewLift"

export default function Lifts() {

  const [lifts, setLifts] = useState([])
  const [toggleForm, setToggleForm] = useState(false)

  return (
    <div>
      <div className="lift-entry">
        <h1>LIFTS</h1>
        <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png"
          onClick={() => setToggleForm(true)}
          width="75"
          height="75"
          alt="add form link"
          />
      </div>
      <div className="lift-container">
        {lifts?.map(lift => {
          return (
            <div className="each-lift" key={lift.id}>
              <h3 className="workout-date">{lift.date}</h3>
              <h3 className="workout-title">{lift.exercise}</h3>
              <p>WEIGHT : {lift.weight} LBS</p>
              <p>SETS : {lift.sets} X</p>
              <p>REPS : {lift.reps} X</p>
            </div>
          )
        })}
        {toggleForm ? 
        <NewLift setLifts={setLifts} setToggleForm={setToggleForm} />
        : ""
      }
        
      </div>
    </div>
  )
}
