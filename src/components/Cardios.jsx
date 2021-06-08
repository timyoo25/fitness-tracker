import { useState } from "react"
import NewCardio from "./NewCardio"

export default function Cardios() {

  const [cardios, setCardios] = useState([])
  const [toggleForm, setToggleForm] = useState(false)

  return (
    <div>
      <h1>Cardio</h1>
      {cardios?.map(cardio => {
        return (
          <div>
          <p>{cardio.exercise}</p>
          <p>{cardio.calories}</p>
          <p>{cardio.duration}</p>
          <p>{cardio.distance}</p>
          <p>{cardio.heartrate}</p>
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
      <NewCardio setCardios={setCardios} setToggleForm={setToggleForm} />
      : ""
      }
      
    </div>
  )
}
