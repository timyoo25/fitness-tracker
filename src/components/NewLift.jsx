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
    await newLift(input)
    setLifts(lifts => ([
      ...lifts,
      input
    ]))
    setToggleForm(false)
  }
  return (
    <div className="lift-form">
      <form onSubmit={handleSubmit} onChange={handleChange} className="form">
        <div>
        <label className="lift-label">Date</label>
        <input type="date" name="date" className="lift-input-date"/>
        </div>
        <div>
        <label className="lift-label">Exercise</label>
        <input type="text" name="exercise" className="lift-input"/>
        </div>
        <div>
        <label className="lift-label">Weight</label>
        <input type="text" name="weight" className="lift-input" placeholder="lbs"/>
        </div>
        <div>
        <label className="lift-label">Sets</label>
        <input type="text" name="sets" className="lift-input"/>
        </div>
        <div>
        <label className="lift-label">Reps</label>
        <input type="text" name="reps" className="lift-input"/>
        </div>
        <div>
        <label className="lift-label">Notes</label>
        <input type="text" name="notes" className="lift-input"/>
        </div>
        <button className="buttons" type="submit">ADD LIFT</button>
      </form>
    </div>
  )
}
