import { Link } from "react-router-dom"

export default function LiftingDates(props) {

  return (
    <div className="date-container">
      {props.uniqueDates &&
        props.uniqueDates.map((date) => {
          return (
            <div className="dates">
              <Link to={`/workouthistory/${date}`}><p>{date}</p></Link>
          </div>
        )
      })}
    </div>
  )
}

