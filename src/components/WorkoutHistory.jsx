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
    <div>
      <nav>
        <Link to="/dates"><h2 className="back-to-dates">WORKOUT ENTRIES</h2></Link>
      </nav>
      <div className="workouts-container">
        {workouts &&
          workouts.map(workout => {
            return (
              <div className="each-workout" key={workout.id}>
                <div className="workout-data">
                  <h2 className="workout-title">{workout.fields.exercise}</h2>
                  {workout.fields.weight && <p>WEIGHT : {workout.fields.weight} LBS</p>}
                  {workout.fields.sets && <p>SETS : {workout.fields.sets} X</p>}
                  {workout.fields.reps && <p>REPS : {workout.fields.reps} X</p>}
                  {workout.fields.distance && <p>DISTANCE : {workout.fields.distance} MI</p>}
                  {workout.fields.duration && <p>DURATION : {workout.fields.duration} MINS</p>}
                  {workout.fields.heartrate && <p>HEARTRATE : {workout.fields.heartrate} BPM</p>}
                  {workout.fields.notes && <p>NOTES : {workout.fields.notes}</p>}
                  <button className="buttons" onClick={() => handleDelete(workout.id, workout.type)}>REMOVE ENTRY</button>
                </div>
              </div>
            )
          })}
      </div>
  </div>
  )
}
