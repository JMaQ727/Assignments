import react, {useState} from 'react';
import {useHistory} from "react-router-dom";


const APIForm = () =>{
    let [option, setOption] = useState("people")
    let [id, setId] = useState(null)
    const history = useHistory();
    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/${option}/${id}`)
    }
    return ( 
        <form onSubmit={submitHandler}>
                <label>Search for: </label>
                    <select className="form-select" onChange={(e)=>setOption(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                    <label>ID:</label>
                    <input type="number" className="form-control" onChange={(e)=>setId(e.target.value)}></input>
                    <button className="btn btn-primary mt-3" type="submit">Search</button>
            </form>
    )
}

export default APIForm