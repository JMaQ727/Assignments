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
        <label htmlFor="">Last Name:</label>
        <input type="text" name="" id="" class="form-control" onChange={(e)=>setLname(e.target.value)}/>
        <label htmlFor="">Email:</label>
        <input type="text" name="" id="" class="form-control" onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="">Password:</label>
        <input type="password" name="" id="" class="form-control" onChange={(e)=>setPassword(e.target.value)}/>
        <label htmlFor="">Confirm Password:</label>
        <input type="password" name="" id="" class="form-control" onChange={(e)=>setConfirm(e.target.value)}/>
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