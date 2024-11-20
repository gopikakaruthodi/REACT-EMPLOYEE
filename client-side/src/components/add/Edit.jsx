import React, { useEffect, useState } from 'react'
import './Add.css'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const navigate=useNavigate()
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
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const res=await fetch(`http://localhost:3000/api/updateemp/${_id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(emp)
        }).then(async(res)=>{
            if(res.status==201){
                const data=await res.json()
                alert(data.msg)
            navigate('/')

            }
            else{
                alert("something went wrong")
            }
        })
        
        

    }
    const handleChange=async(e)=>{
        // console.log(e.target.value);
        // console.log(e.target.name);
        setEmp((pre)=>({...pre,[e.target.name]:e.target.value}))
    }
    // console.log(emp);

    const handleFile=async(e)=>{
        // console.log(e.target.files[0]);
        const profile=await convertBase64(e.target.files[0])
        // console.log(profile);
        setEmp((pre)=>({...pre,profile:profile}))
        
    }

    function convertBase64(file){
        return new Promise((resolve,reject)=>{
            const fileReader=new FileReader()
            fileReader.readAsDataURL(file);
            fileReader.onload=()=>{
                resolve(fileReader.result)
            }
            fileReader.onerror=(error)=>{
                reject(error)
            }
        })
    }
    
  return (
    <div className="add">
    <h2>EDIT EMPLOYEE</h2>
    <div className="first">
        <form action="" id="forms">
            <table className='emp-info'>
                <tbody>
                <tr>
                    <td> Name:</td>
                    <td className="input" ><input type="text" name="name" id="name" value={emp.name} onChange={handleChange}  placeholder="Dona"/></td>
                </tr>
                <tr>
                <td>Gender</td>
                <td className="gender">
                    <input type="radio"  value="male" checked={emp.gender === "male"}  onChange={handleChange} /><span className="male">Male</span>
                    <input type="radio"  value="female" checked={emp.gender === "female"} onChange={handleChange} /><span>Female</span>
                    <input type="radio"  value="other" checked={emp.gender === "other"} onChange={handleChange} /><span>Other</span></td>
                </tr>

                <tr>
                    <td>Age</td>
                    <td className="input">
                        <input type="text" name="age" onChange={handleChange}  value={emp.age} id="age"/>
                    </td>
                </tr>
               
                <tr>
                    <td>Email:</td>
                    <td className="input" ><input type="email" onChange={handleChange}  value={emp.email}  name="email" id="email"  />
                   </td>
                </tr>
                <tr>
                    <td>Place:</td>
                    <td className="input" ><input type="text" name="place"  value={emp.place} onChange={handleChange}  id="place" /></td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td className="input" ><input type="text" name="phone"  value={emp.phone} onChange={handleChange}  id="phone"  />
                    </td>
                </tr>
                <tr>
                    <td>Department:</td>
                    <td className="input" ><input type="text" name="department"  value={emp.department} onChange={handleChange}  id="department" /></td>
                </tr>
                <tr>
                    <td>Designation:</td>
                    <td className="input" ><input type="text" name="designation" value={emp.designation} onChange={handleChange} id="designation" /></td>
                </tr>
                
                
                <tr>
                    <td>Salary:</td>
                    <td className="input" ><input type="number" name="salary" value={emp.salary} onChange={handleChange} id="salary" /></td>
                </tr> 
                <tr>
                    <td>Profile Pic: </td>
                    <td className="input"><input type="file" id="profile"  onChange={handleFile} className="profiles" />
                    <img src={emp.profile} alt="" className='pro'/>
                    </td>
                    
                </tr>
                <tr>
                    <td><input type="submit" value="Update" className="button" onClick={handleSubmit} id="empData"/></td>
                </tr>
                </tbody>
            </table>

        </form>
    </div>
</div>
  )
}

export default Edit