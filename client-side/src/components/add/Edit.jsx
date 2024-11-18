import React from 'react'
import './Add.css'

const Edit = () => {
  return (
    <div className="add">
    <h2>EDIT EMPLOYEE</h2>
    <div className="first">
        <form action="" id="forms">
            <table className='emp-info'>
                <tbody>
                <tr>
                    <td> Name:</td>
                    <td className="input" ><input type="text" name="name" id="name"  placeholder="Dona"/></td>
                </tr>
                <tr>
                <td>Gender</td>
                <td className="gender">
                    <input type="radio"  value="male" /><span className="male">Male</span>
                    <input type="radio"  value="female" /><span>Female</span>
                    <input type="radio"  value="other" /><span>Other</span></td>
                </tr>

                <tr>
                    <td>Age</td>
                    <td className="input">
                        <input type="text" name="age" id="age"/>
                        <div id="invalid-age"></div>
                    </td>
                </tr>
               
                <tr>
                    <td>Email:</td>
                    <td className="input" ><input type="email" name="email" id="email"  />
                    <div id="em"></div></td>
                </tr>
                <tr>
                    <td>Place:</td>
                    <td className="input" ><input type="text" name="place" id="place" /></td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td className="input" ><input type="text" name="phone" id="phone"  />
                    <div id="phn"></div></td>
                </tr>
                <tr>
                    <td>Department:</td>
                    <td className="input" ><input type="number" name="experience" id="experience" /></td>
                </tr>
                <tr>
                    <td>Designation:</td>
                    <td className="input" ><input type="text" name="designation" id="designation" /></td>
                </tr>
                
                
                <tr>
                    <td>Salary:</td>
                    <td className="input" ><input type="number" name="salary" id="salary" /></td>
                </tr> 
                <tr>
                    <td>Profile Pic</td>
                    <td className="input"><input type="file" id="profile" className="profiles" /></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Update" className="button" id="empData"/></td>
                </tr>
                </tbody>
            </table>

        </form>
    </div>
</div>
  )
}

export default Edit