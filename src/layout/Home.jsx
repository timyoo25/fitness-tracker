import { Link } from "react-router-dom"

export default function Home() {

  return (
    <div className="homepage">
      <nav>
        <h1>MyFitTrack</h1>
        <h4>Record and track your progress with the links below!</h4>
        <div className="home-links">
          <div>
            <Link to="/lifting/new">
              <div className="home-images">
                <img src="https://www.vippng.com/png/detail/180-1804072_weightlifting-powerlifting-png.png"
                  width="150"
                  height="100"
                    alt="lifting link"
                />
                </div>
            </Link>
              <p>Enter Lifts</p>
          </div>
          <div>
            <Link to="/cardio/new">
              <div className="home-images">
                <img src="https://www.freepnglogos.com/uploads/running/running-icon-transparent-running-images-vector-8.png"
                  width="100"
                  height="100"
                  alt="cardio link"
                />
              </div>
            </Link>
            <p>Enter Cardio</p>
          </div>
          <div>
            <Link to="/dates">
            <div className="home-images">
              <img src="https://www.pngitem.com/pimgs/m/131-1318752_add-note-add-note-icon-png-transparent-png.png"
                width="100"
                height="100"
                alt="workout exercises link"
              />
            </div>
            </Link>
                <p>Workout Entries</p>
          </div>
        </div>
      </nav>
    </div>

  )
}
