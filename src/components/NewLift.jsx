import { useState } from 'react'
import { newLift } from "../services/api"

const enterLift = {
  date: "",
  exercise: "",
  weight: "",
  sets: "",
  reps: "",
}

export default function NewLift(props) {
  const { setLifts, setToggleForm } = props
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
    setLifts(lifts => ([
      ...lifts,
      input
    ]))
    setToggleForm(false)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>Date</label>
        <input type="date" name="date" />
        <br />
        <label>Exercise</label>
        <input type="text" name="exercise" />
        <br />
        <label>Weight</label>
        <input type="text" name="weight" />
        <br />
        <label>Sets</label>
        <input type="text" name="sets" />
        <br />
        <label>Reps</label>
        <input type="text" name="reps" />
        <br />
        <button type="submit">Add Lift</button>
      </form>
    </div>
  )
}
