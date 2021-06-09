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
      <form onSubmit={handleSubmit} onChange={handleChange} className="form">
        <label>Date </label>
        <input type="date" name="date" />
        <br />
        <label>Exercise </label>
        <input type="text" name="exercise" />
        <br />
        <label>Duration </label>
        <input type="text" name="duration" />
        <br />
        <label>Distance </label>
        <input type="text" name="distance" />
        <br />
        <label>Heartrate </label>
        <input type="text" name="heartrate" />
        <br />
        <button type="submit">Add Cardio</button>
      </form>
    </div>
  )
}
