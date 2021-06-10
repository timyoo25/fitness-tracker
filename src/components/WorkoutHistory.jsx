import { useParams, Link, Redirect } from "react-router-dom"
import { useState, useEffect } from "react";
import { deleteLift, deleteCardio } from "../services/api"
import { liftHistory, cardioHistory } from "../services/api"

export default function WorkoutHistory() {

  const { date } = useParams()
  const [merged, setMerged] = useState([]);
  const [uniqueDates, setUniqueDates] = useState([]);
  const [toggle, setToggle] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [initialRender, setInitialRender] = useState(true)
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    const fetchWorkout = async () => {
      const resLift = await liftHistory();
      resLift.records.map(item => ({...item, type:"lift"}))
      const resCardio = await cardioHistory();
      resCardio.records.map(item => ({...item, type:"cardio"}))
      const mergedArr = resLift &&
        resCardio && [...resLift.records, ...resCardio.records];
      mergedArr.sort((a, b) => {
        return new Date(a.fields.date) - new Date(b.fields.date);
      });
      mergedArr && setMerged(mergedArr);
      const dates = [];
      mergedArr.forEach((workout) => {
        if (!dates.includes(workout.fields.date)) {
          dates.push(workout.fields.date);
        }
      });
      setUniqueDates(dates);
      setInitialRender(false)
    };
    fetchWorkout();
  }, [toggle]);

  useEffect(() => {
    let exercises = merged?.filter(workout => workout.fields.date === date)
    setWorkouts(exercises)
  }, [merged])
  
  useEffect(() => {
    if (initialRender === false) {
      if (workouts.length === 0) {
        setRedirect(true)
      }
    }
  }, [initialRender, workouts])

  const handleDelete = async (id, type) => {
    if (type === "cardio") {
      const resDelCardio = await deleteCardio(id)
    } else {
      const resDelLift = await deleteLift(id)
    }
    setToggle(prevState => !prevState)
  }
    
  if (redirect) {
    return <Redirect to="/dates"/>
  }
    
  return (
  <nav>
    <Link to="/dates"><p>Workout Entries</p></Link>
    <div className="workouts-container">
      {workouts &&
        workouts.map(workout => {
          return (
            <div className="each-workout">
            <h3>{workout.fields.exercise}</h3>
            <p>Weight: {workout.fields.weight}</p>
            <p>Sets: {workout.fields.sets}</p>
            <p>Reps: {workout.fields.reps}</p>
            <p>Distance: {workout.fields.distance}</p>
            <p>Duration: {workout.fields.duration}</p>
            <p>Heartrate: {workout.fields.heartrate}</p>
            <button onClick={() => handleDelete(workout.id, workout.type)}>Remove Entry</button>
          </div>
        )
      })}
    </div>
  </nav>
  )
}
