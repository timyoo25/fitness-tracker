import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>MY FIT TRACK</h1>
      <Link to="/"><h1 className="home-link">HOME</h1></Link>
    </div>
  )
}

