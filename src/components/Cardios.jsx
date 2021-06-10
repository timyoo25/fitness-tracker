import { useState } from "react"
import NewCardio from "./NewCardio"

export default function Cardios() {

  const [cardios, setCardios] = useState([])
  const [toggleForm, setToggleForm] = useState(false)

  return (
    <div>  
      <div className="cardio-entry">
        <h1>CARDIO</h1>
        <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png"
          onClick={() => setToggleForm(true)}
          width="75"
          height="75"
          alt="add form link"
          />
      </div>
      <div className="cardio-container">
        {cardios?.map(cardio => {
          return (
            <div className="each-cardio" key={cardio.id}>
              <h3 className="workout-date">{cardio.date}</h3>
              <h3 className="workout-title">{cardio.exercise}</h3>
              <p>DURATION : {cardio.duration} MINS</p>
              <p>DISTANCE : {cardio.distance} MI</p>
              <p>HEARTRATE : {cardio.heartrate} BPM</p>
              <p>NOTES : {cardio.notes}</p>
            </div>
          )
        })}
        {toggleForm ? 
        <NewCardio setCardios={setCardios} setToggleForm={setToggleForm} />
        : ""
      }
      </div>
    </div>
  )
}
