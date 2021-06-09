import { useParams, Link } from "react-router-dom"

export default function WorkoutHistory({ merged }) {

  const { date } = useParams()
  const workouts = merged?.filter(workout => workout.fields.date === date)
  console.log(workouts)

  return (
  <nav>
    <Link to="/dates"><p>Workout Entries</p></Link>
    <div>
      {workouts &&
        workouts.map(workout => {
          return (
            <div>
            <h3>{workout.fields.exercise}</h3>
            <p>Weight: {workout.fields.weight}</p>
            <p>Sets: {workout.fields.sets}</p>
            <p>Reps: {workout.fields.reps}</p>
            <p>Distance: {workout.fields.distance}</p>
            <p>Duration: {workout.fields.duration}</p>
            <p>Heartrate: {workout.fields.heartrate}</p>
            {/* <button onClick={() => handleDelete(liftEntry.id)}>Remove Entry</button> */}
          </div>
        )
      })}
    </div>
  </nav>
  )
}
