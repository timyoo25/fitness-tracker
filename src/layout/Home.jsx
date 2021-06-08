
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Home() {

  return (
    <div>
      <nav>
        <h1>MyFitTrack</h1>
        <h4>Record and track your progress with the links below!</h4>
        <div className="home-links">
          <div>
            <Link to="/lifting/new">
              <img src="https://www.vippng.com/png/detail/180-1804072_weightlifting-powerlifting-png.png"
                width="150"
                height="100"
                alt="lifting link"
                />
            </Link>
              <p>Enter Lifts</p>
          </div>
          <div>
            <Link to="/cardio/new">
              <img src="https://www.freepnglogos.com/uploads/running/running-icon-transparent-running-images-vector-8.png"
                width="100"
                height="100"
                alt="cardio link"
                />
            </Link>
            <p>Enter Cardio</p>
          </div>
          <div>
            <Link to="/lifting/history">
              <img src="https://www.pngitem.com/pimgs/m/131-1318752_add-note-add-note-icon-png-transparent-png.png"
                width="100"
                height="100"
                alt="lifting entry link"
              />
            </Link>
            <p>Lift Entries</p>
          </div>
          <div>
            <Link to="/cardio/history">
              <img src="https://www.pngitem.com/pimgs/m/131-1318752_add-note-add-note-icon-png-transparent-png.png"
                width="100"
                height="100"
                alt="cardio entry link"
                />
            </Link>
            <p>Cardio Entries</p>
          </div>
        </div>
      </nav>
    </div>

  )
}
