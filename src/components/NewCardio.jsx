import { useState } from 'react'
import { newCardio } from "../services/api"

const enterCardio = {
  date: "",
  exercise: "",
  duration: "",
  distance: "",
  heartrate: "",
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
    const res = await newCardio(input)
    setCardios(cardios => ([
      ...cardios,
      input
    ]))
    setToggleForm(false)
  }
  return (
    <div className="cardio-form">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>Date </label>
        <input type="date" name="date" className="input-date"/>
        <br />
        <label>Exercise </label>
        <input type="text" name="exercise" className="input"/>
        <br />
        <label>Duration </label>
        <input type="text" name="duration" className="input"/>
        <label> mins</label>
        <br />
        <label>Distance </label>
        <input type="text" name="distance" className="input"/>
        <label> mi</label>
        <br />
        <label>Heartrate </label>
        <input type="text" name="heartrate" className="input"/>
        <label> bpm</label>
        <br />
        <button className="buttons" type="submit">ADD CARDIO</button>
      </form>
    </div>
  )
}
