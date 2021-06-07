import { useState } from 'react'
import { newCardio } from "../services/api"
import Navbar from "./Navbar"

const enterCardio = {
  exercise: "",
  calories: "",
  duration: "",
  distance: "",
  heartrate: "",
}

export default function NewCardio(form) {

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
    return res
  }
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>Exercise</label>
        <input type="text" name="exercise" />
        <label>Calories Burned</label>
        <input type="text" name="calories" />
        <label>Duration</label>
        <input type="text" name="duration" />
        <label>Distance</label>
        <input type="text" name="distance" />
        <label>Heartrate</label>
        <input type="text" name="heartrate" />
        <button type="submit">Add Cardio</button>
        <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png" 
          onClick={() => {}}
          width="75"
          height="75"
          alt="add form link"
        />
      </form>
    </div>
  )
}
