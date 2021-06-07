import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { exampleLift } from "../services/api"

import Navbar from "./Navbar"

export default function ExampleLift() {

  const [lift, setLift] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetch = async () => {
      const res = await exampleLift(id)
      console.log(res)
      setLift(res.records[1])
    }
    fetch()
  }, [])
    
    
  return (
    <div>
      <Navbar />
      <br />
      <h3>{lift.fields?.body[0]}</h3>
      <p>{lift.fields?.exercise}</p>
      <p>Weight: {lift.fields?.weight}</p>
      <p>Sets: {lift.fields?.sets}</p>
      <p>Reps: {lift.fields?.reps}</p>
    </div>
  )
}
