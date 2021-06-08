
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Home() {

  const [history, setHistory] = useState("")

  return (
    <div>
      <nav>
        <h1>MyFitTrack</h1>
        <h3><Link to="/cardio/:id">Cardio Entries</Link></h3>
        <h3><Link to="/weightlifting/:id">Weight Lifting Entries</Link></h3>
      </nav>
      <div>
        <Link to="/weightlifting">
        <img src="https://www.vippng.com/png/detail/180-1804072_weightlifting-powerlifting-png.png"
          width="150"
          height="100"
          alt="lifting link"
          />
        </Link>
          <p>Enter Lifts</p>
      </div>
      <div>
        <Link to="/cardio">
        <img src="https://www.freepnglogos.com/uploads/running/running-icon-transparent-running-images-vector-8.png"
          width="100"
          height="100"
          alt="cardio link"
          />
        </Link>
        <p>Enter Cardio</p>
      </div>
      <div>
        <img src=""></img>
      </div>
    </div>

  )
}
