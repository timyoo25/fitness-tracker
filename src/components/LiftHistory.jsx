import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { deleteLift, liftHistory } from "../services/api"


export default function LiftHistory() {

  const [liftEntries, setLiftEntries] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetch = async () => {
      const res = await liftHistory(id)
      // console.log(res)
      setLiftEntries(res.records)
    }
    fetch()
  }, [])
    
  const handleDelete = async () => {
    const res = await deleteLift(id)
  }
    
  return (
    <div>
      {liftEntries &&
        liftEntries.map((liftEntry) => {
        return (
        <div>
          <h3>{liftEntry.fields.exercise}</h3>
          <h5>{liftEntry.fields.date}</h5>
          <p>Weight: {liftEntry.fields.weight}</p>
          <p>Sets: {liftEntry.fields.sets}</p>
            <p>Reps: {liftEntry.fields.reps}</p>
            <button onClick={handleDelete}>Remove Entry</button>
        </div>
        )
    })}
    </div>
  )
}
