import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios'

const Products = (props) => {
    let [title, setTitle] = useState("")
    let [price, setPrice] = useState("")
    let [description, setDescription] = useState("")
    const submitHandler = (e) => {
        e.preventDefault();
        let formInfo = {title, price, description}
        axios.post("http://localhost:8000/api/product", formInfo)
            .then(res=>{
                console.log("THIS IS WHAT WE GOT--", res);
                setTitle("");
                setPrice("");
                setDescription("");
                props.setFormSubmitted(!props.formSubmitted)
            })
            .catch(err=>{
                console.log("we got PROBLEMS", err)
            })
    }
    return(
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="">Title: </label>
                <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                <label htmlFor="">Price: </label>
                <input type="number" className="form-control" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                <label htmlFor="">Description: </label>
                <input type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                <input type="submit" value="Submit" className="btn btn-primary mt-3" />
            </form>
        </>
    )
}

export default Products