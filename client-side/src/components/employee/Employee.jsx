import React from 'react'
import './Employee.css'
import { Link } from 'react-router-dom'

const Employee = () => {
  return (
    <>
    <div className="cards">
        
        <div className="details">
            <table className='table'>
                <thead>
                    <tr>
                        <div className="profile">
                            <img src="" alt="no img" />
                        </div>
                    </tr>
                </thead>
               <tbody className='info'>
               <tr>
                    <th>Name</th>
                    <td>William</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>female</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>12</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>asf@gmail.com</td>
                </tr>
                <tr>
                    <th>Place</th>
                    <td>Willfdgjhfdiam</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>3746927834</td>
                </tr>
                <tr>
                    <th>Department</th>
                    <td>Finance</td>
                </tr>
                <tr>
                    <th>Designation</th>
                    <td>Manager</td>
                </tr>
                <tr>
                    <th>Salary</th>
                    <td>653454</td>
                </tr>

                <tr>
                    <td className='buttons'>
                    <Link to="/edit"><button className='edit'>Edit</button></Link>
                    <button className='delete'>Delete</button>
                    </td>
                </tr>
            
               </tbody>
            </table>
        </div>
    </div>

    </>
  )
}

export default Employee