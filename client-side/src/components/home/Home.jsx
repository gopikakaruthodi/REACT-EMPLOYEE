import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link ,useNavigate} from 'react-router-dom'


const Home = () => {
  const [emps,setEmp]=useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData=async()=>{
    const res=await fetch("http://localhost:3000/api/displayemps")
    const data=await res.json()
    // console.log(data);
    setEmp([...data])
  }

  // console.log(emps);
  

  return (
   <>
          <div className="main">
            {emps.map((emp)=>
                <Link to={`/emp/${emp._id}`} key={emp._id}>
                  <div className="card">
                    <div className="part"></div>
                    <div className="image">
                      <img src={emp.profile}  alt="" />
                    </div>
                    <div className="content">
                      <h3>{emp.name.toUpperCase()}</h3>
                      <p className="category">{emp.designation}</p>
                    </div>
                    
                  </div>
              </Link>)}
        </div>
   </>
  )
}

export default Home