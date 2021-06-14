import { useState } from 'react'
import { newCardio } from "../services/api"

const enterCardio = {
  date: "",
  exercise: "",
  duration: "",
  distance: "",
  heartrate: "",
  notes: "",
}

export default function NewCardio(props) {
  const { setCardios, setToggleForm } = props
  const [input, setInput] = useState(enterCardio)

  const handleChange = async (e) => {
    const { name, value } = e.target

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await newCardio(input)
    setCardios(cardios => ([
      ...cardios,
      input
    ]))
    setToggleForm(false)
  }
  
  return (
    <div className="cardio-form">
      <form onSubmit={handleSubmit} onChange={handleChange} className="form">
        <div id="row-1">
          <label className="cardio-label">Date</label>
          <input type="date" name="date" className="cardio-input-date"/>
        </div>
        <div id="row-2">
          <label className="cardio-label">Exercise</label>
          <input type="text" name="exercise" className="cardio-input" id="row-2"/>
        </div>
        <div id="row-2">
          <label cla3sName="cardio-label">Duration</label>
          <input type="text" name="duration" className="cardio-input" id="row-3" placeholder="mins"/>
        </div>
        <div id="row-4">
          <label className="cardio-label">Distance</label>
          <input type="text" name="distance" className="cardio-input" id="row-4" placeholder="miles"/>
        </div>
        <div id="row-5">
          <label className="cardio-label">Heartrate</label>
          <input type="text" name="heartrate" className="cardio-input" id="row-5" placeholder="bpm"/>
        </div>
        <div id="row-6">
          <label className="cardio-label">Notes</label>
          <input type="text" name="notes" className="cardio-input" id="row-6"/>
        </div>
        <button className="buttons" type="submit">ADD CARDIO</button>
      </form>
    </div>
  )
}
