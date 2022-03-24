import axios from 'axios'
import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

const Create = () => {
    let [name, setName] = useState("")
    let [formErrors, setFormErrors] = useState({})
    const history = useHistory();
    const submitHandler=(e)=>{
        e.preventDefault();
        let formInfo = {name}
        axios.post("http://localhost:8000/api/authors", formInfo)
            .then(res=>{
                if (res.data.error){
                    setFormErrors(res.data.error.errors);
                } else {
                console.log("MADE A DUDE", res)
                history.push("/")
                }
            })
            .catch(err=> {
                console.log("issues with this", err)
            })
    }
    return(
        <>
            <Link to="/" className="btn btn-secondary">Home</Link>
            <form onSubmit={submitHandler}>
                <label htmlFor="">Name:</label>
                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} value={name}/>
                <p className="text-danger">{formErrors.name?.message}</p>
                <input type="submit" value="Submit" className="btn btn-success mt-3" />
            </form>
        </>
    )
}

export default Create