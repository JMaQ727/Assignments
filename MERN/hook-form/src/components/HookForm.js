import React, { useState } from "react";

const HookForm = () => {
    //name
    let [fname, setFname] = useState("")
    //last name
    let [lname, setLname] = useState("")
    //email
    let [email, setEmail] = useState("")
    //password
    let [password, setPassword] = useState("")
    //confirm password
    let [confirm, setConfirm] = useState("")
    return <>
    <div>
        <label htmlFor="">First Name:</label>
        <input type="text" name="" id="" class="form-control" onChange={(e)=>setFname(e.target.value)}/>
        {
            fname.length<2 && fname.length > 0? <p>First Name must be at least 2 characters</p>: null
        }
        <label htmlFor="">Last Name:</label>
        <input type="text" name="" id="" class="form-control" onChange={(e)=>setLname(e.target.value)}/>
        {
            lname.length<2 && lname.length>0? <p>Last Name must be at least 2 characters</p>: null
        }
        <label htmlFor="">Email:</label>
        <input type="text" name="" id="" class="form-control" onChange={(e)=>setEmail(e.target.value)}/>
        {
            email.length<5 && email.length>0? <p>Email must be at least 5 characters</p>: null
        }
        <label htmlFor="">Password:</label>
        <input type="password" name="" id="" class="form-control" onChange={(e)=>setPassword(e.target.value)}/>
        {
            password.length<8 && password.length > 0? <p>Password must be at least 8 characters</p>: null
        }
        <label htmlFor="">Confirm Password:</label>
        <input type="password" name="" id="" class="form-control" onChange={(e)=>setConfirm(e.target.value)}/>
        {
            confirm!=password && confirm.length>0? <p>Passwords must match</p>: null
        }
    </div>
    <div class="mt-3">
        <h3>Your Form Data</h3>
        <p>First Name: {fname}</p>
        <p>Last Name: {lname}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirm}</p>
    </div>
    </>
}

export default HookForm