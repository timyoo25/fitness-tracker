import { useState } from 'react'
import { newLift } from "../services/api"
import Navbar from "./Navbar"

const enterLift = {
  exercise: "",
  weight: "",
  sets: "",
  reps: "",
}

export default function NewLift(form) {

  const [input, setInput] = useState(enterLift)

  const handleChange = async (e) => {
    const { name, value } = e.target

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await newLift(input)
    return res
  }
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>Exercise</label>
        <input type="text" name="exercise" />
        <label>Weight</label>
        <input type="text" name="weight" />
        <label>Sets</label>
        <input type="text" name="sets" />
        <label>Reps</label>
        <input type="text" name="reps" />
        <button type="submit">Add Lift</button>
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
