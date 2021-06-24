import { useState, useEffect } from 'react'
import { deleteCardio, cardioHistory } from "../services/api"


export default function CardioHistory() {

  const [cardioEntries, setCardioEntries] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const res = await cardioHistory()
      setCardioEntries(res.records)
    }
    fetch()
  }, [])
    
  const handleDelete = async (id) => {
    await deleteCardio(id)
  }
    
  return (
    <div >
      {cardioEntries &&
        cardioEntries.map((cardioEntry) => {
        return (
        <div className="cardios-container">
          <h3>{cardioEntry.fields.date}</h3>
          <h4>{cardioEntry.fields.exercise}</h4>
          <p>Weight: {cardioEntry.fields.weight}</p>
          <p>Sets: {cardioEntry.fields.sets}</p>
          <p>Reps: {cardioEntry.fields.reps}</p>
          <button onClick={() => handleDelete(cardioEntry.id)}>Remove Entry</button>
        </div>
        )
    })}
    </div>
  )
}
