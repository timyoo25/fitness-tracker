import { useState, useEffect } from 'react'
import { deleteLift, liftHistory } from "../services/api"


export default function LiftHistory() {

  const [liftEntries, setLiftEntries] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const res = await liftHistory()
      setLiftEntries(res.records)
    }
    fetch()
  }, [])
    
  const handleDelete = async (id) => {
    await deleteLift(id)
  }
    
  return (
    <div >
      {liftEntries &&
        liftEntries.map((liftEntry) => {
        return (
        <div className="lifts-container">
          <h3>{liftEntry.fields.date}</h3>
          <h4>{liftEntry.fields.exercise}</h4>
          <p>Weight: {liftEntry.fields.weight}</p>
          <p>Sets: {liftEntry.fields.sets}</p>
          <p>Reps: {liftEntry.fields.reps}</p>
          <button onClick={() => handleDelete(liftEntry.id)}>Remove Entry</button>
        </div>
        )
    })}
    </div>
  )
}
