import { Link } from "react-router-dom"

export default function LiftingDates({uniqueDates}) {

  return (
    <div>
      {uniqueDates &&
        uniqueDates.map(date => {
          return (
          <div>
            <Link to={`/workouthistory/${date}`}><p>{date}</p></Link>
          </div>
        )
      })}
    </div>
  )
}

