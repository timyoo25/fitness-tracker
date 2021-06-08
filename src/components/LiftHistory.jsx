import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { liftHistory } from "../services/api"


export default function LiftHistory() {

  const [liftEntries, setLiftEntries] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetch = async () => {
      const res = await liftHistory(id)
      console.log(res)
      setLiftEntries(res.records)
    }
    fetch()
  }, [])
    
    
  return (
    <div>
      {liftEntries &&
        liftEntries.map((liftEntry) => {
        return (
        <div>
          {/* <h3>{lift.fields?.body[0]}</h3> */}
          <h3>{liftEntry.fields.exercise}</h3>
          <p>Weight: {liftEntry.fields.weight}</p>
          <p>Sets: {liftEntry.fields.sets}</p>
            <p>Reps: {liftEntry.fields.reps}</p>
        </div>
        )
    })}
    </div>
  )
}
