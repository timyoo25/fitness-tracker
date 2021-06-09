import { useState, useEffect } from 'react'
import { cardioHistory, deleteCardio } from "../services/api"


export default function CardioHistory() {

  const [cardioEntries, setCardioEntries] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const res = await cardioHistory()
      console.log(res)
      setCardioEntries(res.records)
    }
    fetch()
  }, [])
    
  const handleDelete = async (id) => {
    const res = await deleteCardio(id)
  }
    
  return (
    <div>
      {cardioEntries &&
        cardioEntries.map((cardioEntry) => {
          return (
            <div>
              <h3>{cardioEntry.fields.date}</h3>
              <h4>{cardioEntry.fields.exercise}</h4>
              <p>Duration: {cardioEntry.fields.duration}</p>
              <p>Distance: {cardioEntry.fields.distance}</p>
              <p>Heartrate: {cardioEntry.fields.heartrate}</p>
              <button onClick={() => handleDelete(cardioEntry.id)}>Remove Entry</button>
            </div>
          )
      })}
    </div>
  )
}
