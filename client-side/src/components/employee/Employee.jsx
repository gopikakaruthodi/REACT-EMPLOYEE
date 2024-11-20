import React, { useEffect, useState } from 'react'
import './Employee.css'
import { Link, useParams } from 'react-router-dom'

const Employee = () => {
    const {_id}=useParams();
    const[emp,setEmp]=useState({})
    // console.log(_id);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const res=await fetch(`http://localhost:3000/api/displayemp/${_id}`)
        const data=await res.json()
        // console.log(data);
        setEmp({...data})
        
    }
    const deleteEmp=async(_id)=>{
        if(confirm('Do you want to delete the employee?')){
            const res=await fetch(`http://localhost:3000/api/deleteemp/${_id}`,{method:"DELETE"}).then(async(res)=>{
                if(res.status==200){
                    const data=await res.json()
                    // console.log(data.msg);
                    alert(data.msg)
                    window.location.href='/'
                }
                else{
                    alert("Something went wrong...!")
                }
            }).catch((error)=>{console.log(error);
            })
        }
    }
    
    
  return (
    <>
    <div className="cards">
        
        <div className="details">
            <table className='table'>
                <thead>
                    <tr>
                        <td><div className="profile">
                            <img src={emp.profile} alt="no img" />
                        </div></td>
                        <td className='name'>{emp.name}</td>
                    </tr>
                </thead>
               <tbody className='info'>
               {/* <tr>
                    <th>Name: </th>
                    <td>{emp.name}</td>
                </tr> */}
                <tr>
                    <th>Gender:</th>
                    <td>{emp.gender}</td>
                </tr>
                <tr>
                    <th>Age:</th>
                    <td>{emp.age}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>{emp.email}</td>
                </tr>
                <tr>
                    <th>Place:</th>
                    <td>{emp.place}</td>
                </tr>
                <tr>
                    <th>Phone:</th>
                    <td>{emp.phone}</td>
                </tr>
                <tr>
                    <th>Department:</th>
                    <td>{emp.department}</td>
                </tr>
                <tr>
                    <th>Designation:</th>
                    <td>{emp.designation}</td>
                </tr>
                <tr>
                    <th>Salary:</th>
                    <td>{emp.salary}</td>
                </tr>

                <tr>
                    <td className='buttons'>
                    <Link to={`/edit/${emp._id}`}><button className='edit'>Edit</button></Link>
                    <button className='delete' onClick={()=>deleteEmp(emp._id)}>Delete</button>
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