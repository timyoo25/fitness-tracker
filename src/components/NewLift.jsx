import { useState } from 'react'
import { newLift } from "../services/api"

const enterLift = {
  date: "",
  exercise: "",
  weight: "",
  sets: "", 
  reps: "",
  notes: "",
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
    <div className="lift-form">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>Date </label>
        <input type="date" name="date" className="input-date"/>
        <br />
        <label>Exercise </label>
        <input type="text" name="exercise" className="input"/>
        <br />
        <label>Weight </label>
        <input type="text" name="weight" className="input"/>
        <label> lbs</label>
        <br />
        <label>Sets </label>
        <input type="text" name="sets" className="input"/>
        <br />
        <label>Reps </label>
        <input type="text" name="reps" className="input"/>
        <br />
        <label>Notes </label>
        <input type="text" name="notes" className="input"/>
        <button className="buttons" type="submit">ADD LIFT</button>
      </form>
    </div>
  )
}
