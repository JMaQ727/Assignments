import react, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, Link, useHistory} from "react-router-dom";

const People = () =>{
    let [swObj, setPeopleList] = useState({})
    let [home, setHome] = useState("")
    const {id} = useParams();
    const history = useHistory();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then((response) => {
                console.log(response.data.homeworld)
                setPeopleList(response.data)
                axios.get(response.data.homeworld)
                    .then((response) => {
                        console.log("THE SECOND ONE", response.data)
                        setHome(response.data)
                    })
                    .catch((err)=> {
                        console.log("Error when fetching 2--->", err)
                    })   
            })       
            .catch((err)=> {
                console.log("Error when fetching --->", err)
                history.push("/error")
            })
    },[id])
    return (
        <>
            <div>
                <h2>{swObj.name}</h2>
                <p>Height: {swObj.height}cm</p>
                <p>Weight: {swObj.mass}kg</p>
                <p>Hair Color: {swObj.hair_color}</p>
                <p>Eye color: {swObj.eye_color}</p>
                <p>Home World: <Link to={`/${swObj.homeworld?.slice(22)}`}>{home.name}</Link></p>
            </div>
        </>
    )
}

export default People