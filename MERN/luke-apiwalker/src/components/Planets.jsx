import react, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

const Planets = () =>{
    let [swObj, setPeopleList] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then((response) => {
                console.log(response.data)
                setPeopleList(response.data)
            })
            .catch((err)=> {
                console.log("Error when fetching --->", err)
            })          
    },[id])
    return (
        <>
                <div>
                    <h2>{swObj.name}</h2>
                    <p>Climate: {swObj.climate}</p>
                    <p>Terrain: {swObj.terrain}</p>
                    <p>Population: {swObj.population}</p>
                    <p>Diameter: {swObj.diameter}</p>
                </div>
        </>
    )
}

export default Planets