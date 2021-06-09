import { useState } from "react"
import NewLift from "./NewLift"

export default function Lifts() {

  const [lifts, setLifts] = useState([])
  const [toggleForm, setToggleForm] = useState(false)

  return (
    <div>  
      <div>
        <h1>Lifts</h1>
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
            <div className="each-lift">
            <h3>{lift.date}</h3>
            <h4>{lift.exercise}</h4>
            <p>Weight: {lift.weight}</p>
            <p>Sets: {lift.sets}</p>
            <p>Reps: {lift.reps}</p>
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
