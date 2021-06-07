import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { exampleCardio } from "../services/api"

import Navbar from "./Navbar"

export default function ExampleCardio() {

  const [cardio, setCardio] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetch = async () => {
      const res = await exampleCardio(id)
      console.log(res)
      setCardio(res.records[0])
    }
    fetch()
  }, [])
    
    
  return (
    <div>
      <Navbar />
      <br />
      <h3>{cardio.fields?.exercise}</h3>
      <p>Calories Burned: {cardio.fields?.calories}</p>
      <p>Duration: {cardio.fields?.duration}</p>
      <p>Distance: {cardio.fields?.distance}</p>
      <p>Heartrate: {cardio.fields?.heartrate}</p>
    </div>
  )
}
