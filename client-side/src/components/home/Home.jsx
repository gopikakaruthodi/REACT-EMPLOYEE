import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
   <>
    <Link to="/emp">
    <div className="main">
        <div className="cards">
        <div className="card">
          <div className="image">
            <img  alt="" />
          </div>
          <div className="content">
            <h3>Name</h3>
            <p className="category">Des</p>
          </div>
          
        </div>
        </div>
      </div>
    </Link>
   </>
  )
}

export default Home