
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Home() {

  const [history, setHistory] = useState("")

  return (
    <div>
      <nav>
        <h1>MyFitTrack</h1>
        <h4>Record and track your progress with the links below!</h4>
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
          <Link to="/weightlifting/:id">
            <img src="https://lh3.googleusercontent.com/proxy/A2fnFQvMYddjJhz19hvVkTC3gxu0Dy7aLt98KoxF_oaCOaPoBrm8amRhP49yhYNk-ExZ7TVzf0SevqW_s77m3pW5Nw7YbmbPbR9YXZZbdMBQQKf9uJQTrV60dE6ZH6UCsJrqK82S9eb9zL2DAwtzqjUe1w0"
              width="100"
              height="100"
              alt="lifting entry link"
            />
          </Link>
          <p>Lift Entries</p>
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
          <Link to="/cardio/:id">
            <img src="https://lh3.googleusercontent.com/proxy/A2fnFQvMYddjJhz19hvVkTC3gxu0Dy7aLt98KoxF_oaCOaPoBrm8amRhP49yhYNk-ExZ7TVzf0SevqW_s77m3pW5Nw7YbmbPbR9YXZZbdMBQQKf9uJQTrV60dE6ZH6UCsJrqK82S9eb9zL2DAwtzqjUe1w0"
              width="100"
              height="100"
              alt="cardio entry link"
              />
          </Link>
          <p>Cardio Entries</p>
        </div>
      </nav>
    </div>

  )
}
