import React, {useState} from 'react'
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/search',
    params: {q: 'Kendrick Lamar'},
    headers: {
        'x-rapidapi-host': 'genius.p.rapidapi.com',
        'x-rapidapi-key': '39d3688153mshd90836524fc1cc3p1f3b5ajsn0e3caab02143'
    }
};

const Hearthstone = () => {
    let [hsList, setHsList] = useState([])
    const getHs = () => {
        axios.request(options)
            .then(function (response) {
            console.log(response.data);
            setHsList(response.data.result)
        })
            .catch(function (error) {
            console.error(error);
        });
    }
    return (
        <>
        <button onClick={getHs}>Get HS Cards</button>
        {
            hsList.map((hsCard, index)=>{
                <p>{hsCard.full_title}</p>
            })
        }
        </>
    )
}

export default Hearthstone