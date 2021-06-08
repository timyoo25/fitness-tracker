import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { cardioHistory } from "../services/api"


export default function CardioHistory() {

  const [cardioEntries, setCardioEntries] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetch = async () => {
      const res = await cardioHistory(id)
      console.log(res)
      setCardioEntries(res.records)
    }
    fetch()
  }, [])
    
    
  return (
    <div>
      {cardioEntries &&
        cardioEntries.map((cardioEntry) => {
          return (
            <div>
              <h3>{cardioEntry.fields.exercise}</h3>
              <p>Calories Burned: {cardioEntry.fields.calories}</p>
              <p>Duration: {cardioEntry.fields.duration}</p>
              <p>Distance: {cardioEntry.fields.distance}</p>
              <p>Heartrate: {cardioEntry.fields.heartrate}</p>
            </div>
          )
      })}
    </div>
  )
}
