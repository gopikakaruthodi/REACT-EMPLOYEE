import React from 'react'
import './Navg.css'
import { Link } from 'react-router-dom'

const Navg = () => {
  return (
    <div className="nav">
      <button><Link to='/add'>ADD</Link></button>
      <div className="search">
        <input type="search"  id="" />
      </div>
      <div className="selection">
        <select>
          <option value=""></option>
          <option value="manager">Manager</option>
          <option value="jr">Jr</option>
          <option value="Snr">Snr</option>
        </select>
      </div>
    </div>
  )
}

export default Navg