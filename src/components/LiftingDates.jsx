import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { liftHistory, cardioHistory } from "../services/api";

export default function LiftingDates() {
// eslint-disable-next-line
  const [merged, setMerged] = useState([]);
  const [uniqueDates, setUniqueDates] = useState([]);

  useEffect(() => {
    const fetchWorkout = async () => {
      const resLift = await liftHistory();
      const resCardio = await cardioHistory();
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
    };
    fetchWorkout();
  }, []);

  return (
    <div>
      <div className="date-container">
        {uniqueDates &&
          uniqueDates.map(date => {
            return (
              <div className="dates" key={date.id}>
                <Link to={`/workouthistory/${date}`}><p>{new Date(date).toLocaleDateString()}</p></Link>
              </div>
            )
        })}
      </div>
    </div>
  )
}

