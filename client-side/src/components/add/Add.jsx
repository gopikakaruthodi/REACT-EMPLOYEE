import React, { useState } from 'react'
import './Add.css'

const Add = () => {
    const[emp,setEmp]=useState({
        name:'',gender:'',age:'',email:'',place:'',phone:'',department:'',designation:'',profile:''
    })
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const res=await fetch("http://localhost:3000/api/addemp",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(emp)
        })
        window.location.href='/'


        // console.log(res);
        
        

    }
    const handleChange=async(e)=>{
        // console.log(e.target.value);
        // console.log(e.target.name);
        setEmp((pre)=>({...pre,[e.target.name]:e.target.value}))
    }

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
    <>
    
    <div className="add">
    <h2>ADD EMPLOYEE</h2>
    <div className="first">
        <form action="" id="forms">
            <table className='emp-info'>
                <tbody>
                <tr>
                    <td> Name:</td>
                    <td className="input" ><input type="text" name="name" id="name" onChange={handleChange}  placeholder="Dona"/></td>
                </tr>
                <tr>
                <td>Gender</td>
                <td className="gender">
                    <input type="radio" onChange={handleChange} name='gender'  value="male" /><span className="male" >Male</span>
                    <input type="radio"  onChange={handleChange} name='gender' value="female" /><span>Female</span>
                    <input type="radio"  onChange={handleChange} name='gender' value="other" /><span>Other</span></td>
                </tr>

                <tr>
                    <td>Age</td>
                    <td className="input">
                        <input type="text" onChange={handleChange} name="age" id="age"/>
                    </td>
                </tr>
               
                <tr> 
                    <td>Email:</td>
                    <td className="input" ><input type="email"  onChange={handleChange}  name="email" id="email"  />
                    </td>
                </tr>
                <tr>
                    <td>Place:</td>
                    <td className="input" ><input type="text" onChange={handleChange}  name="place" id="place" /></td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td className="input" ><input type="text"  onChange={handleChange} name="phone" id="phone"  />
                    </td>
                </tr>
                <tr>
                    <td>Department:</td>
                    <td className="input" ><input type="text"  onChange={handleChange} name="department" id="experience" /></td>
                </tr>
                <tr>
                    <td>Designation:</td>
                    <td className="input" ><input type="text"  onChange={handleChange} name="designation" id="designation" /></td>
                </tr>
                
                
                <tr>
                    <td>Salary:</td>
                    <td className="input" ><input type="number" onChange={handleChange}  name="salary" id="salary" /></td>
                </tr> 
                <tr>
                    <td>Profile Pic</td>
                    <td className="input"><input type="file"  id="profile" onChange={handleFile} className="profiles" name='profile' /></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Add" onClick={handleSubmit} className="button" id="empData"/></td>
                </tr>
                </tbody>
            </table>

        </form>
    </div>
</div>

</>

  )
}

export default Add