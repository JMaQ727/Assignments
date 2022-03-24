import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'

const Edit = () => {
    let [oneAuthor, setOneAuthor] = useState({
        name: ""
    });
    let [formErrors, setFormErrors] = useState({})
    const{id} = useParams();
    const history = useHistory();
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                console.log("GOT THIS ONE DUDE", res)
                setOneAuthor(res.data.results)
            })
            .catch(err=>{
                console.log("COULD NOT GET ONE DUDE", err)
            })
    },[])
    const changeHandler = (e)=>{
            setOneAuthor({
                ...oneAuthor,
                [e.target.name]: e.target.value
            })
        }
    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, oneAuthor)
            .then(res=>{
                if (res.data.error){
                    setFormErrors(res.data.error.errors);
                } else {
                console.log("UPDATED", res)
                history.push("/")
                }
            })
            .catch(err=>{
                console.log("ISSUE UPDATING", err)
            })
    }
    return(
        <>
            <Link to="/" className="btn btn-secondary">Home</Link>
            <form onSubmit={updateAuthor}>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" className="form-control" onChange={changeHandler} value={oneAuthor.name}/>
                <p className="text-danger">{formErrors.name?.message}</p>
                <input type="submit" value="Submit" className="btn btn-success mt-3" />
            </form>
        </>
    )
}

export default Edit