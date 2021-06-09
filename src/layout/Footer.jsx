import React from 'react'
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/timyoo25">
        <img src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
          alt="github link"
          height="40"
          width="40"
        />
      </a>
      <p>©Tim Yoo</p>
      <a href="https://www.linkedin.com/in/timothy-yoo-85a438b2/">
        <img src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
          alt="linkedin link"
          height="40"
          width="40"
        />
      </a>
    </div>
  )
}
