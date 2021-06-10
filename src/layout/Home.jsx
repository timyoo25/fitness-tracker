import { Link } from "react-router-dom"

export default function Home() {

  return (
    <div className="homepage">
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
              <p>ENTER LIFTS</p>
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
            <p>ENTER CARDIO</p>
          </div>
          <div>
            <Link to="/dates">
            <div className="home-images">
              <img src="https://static.thenounproject.com/png/254260-200.png"
                width="100"
                height="100"
                alt="workout exercises link"
              />
            </div>
            </Link>
                <p>WORKOUT ENTRIES</p>
          </div>
        </div>
    </div>

  )
}
