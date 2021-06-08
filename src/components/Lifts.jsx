import { useState } from "react"
import NewLift from "./NewLift"

export default function Lifts() {

  const [lifts, setLifts] = useState([])
  const [toggleForm, setToggleForm] = useState(false)

  return (
    <div>
      <h1>Lifts</h1>
      {lifts?.map(lift => {
        return (
          <div>
          <p>{lift.exercise}</p>
          <p>{lift.weight}</p>
          <p>{lift.sets}</p>
          <p>{lift.reps}</p>
          </div>
        )
      })}
      <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png"
        onClick={() => setToggleForm(true)}
        width="75"
        height="75"
        alt="add form link"
      />
      {toggleForm ? 
      <NewLift setLifts={setLifts} setToggleForm={setToggleForm} />
      : ""
      }
      
    </div>
  )
}
