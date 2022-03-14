import React, {useState} from 'react'
import axios from 'axios'

const Poke = () => {
    let [pokeList, setPokeList] = useState([])
    const getPoke = () =>{ 
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                setPokeList(response.data.results)
            }) 
            .catch((err)=> {
                console.log("error when fetching", err);
            })
    }
    return (
        <>
            <button onClick={getPoke}>Get Pokemon</button>
            {
                pokeList.map((pokeObj, index)=> {
                    return <div>
                        <h2>{pokeObj.name}</h2>
                    </div>
                })
            }
        </>
    )
}

export default Poke
