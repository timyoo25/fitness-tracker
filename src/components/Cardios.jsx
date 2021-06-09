import { useState } from "react"
import NewCardio from "./NewCardio"

export default function Cardios() {

  const [cardios, setCardios] = useState([])
  const [toggleForm, setToggleForm] = useState(false)

  return (
    <div>  
      <div>
        <h1>Cardio</h1>
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
            <div className="each-cardio">
            <h3>{cardio.date}</h3>
            <h4>{cardio.exercise}</h4>
            <p>Duration: {cardio.duration}</p>
            <p>Distance: {cardio.distance}</p>
            <p>Heartrate: {cardio.heartrate}</p>
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
