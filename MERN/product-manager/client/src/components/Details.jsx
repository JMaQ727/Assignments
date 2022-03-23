import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory,  useParams, Link } from 'react-router-dom'

const Details = () => {
    const {id} = useParams();
    const history = useHistory();
    let [productDetails, setProductDetails] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res=> {
                console.log("SHOULD BE ONE PRODUCT:", res.data)
                setProductDetails(res.data.results)
            })
            .catch(err=> {console.log("we got issues bro~~~", err)})
    },[])
    const deleteProduct = () =>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res=>{
                console.log("DELETED!!!!!!", res)
                history.push("/")
            })
            .catch(err=>{
                console.log("problems deleting this", err)
            })
    }
    return (
        <>
            <div>
                <h2>{productDetails.title}</h2>
                <p>Price: ${productDetails.price}</p>
                <p>Description: {productDetails.description}</p>
                <Link to={`/edit/${id}`} className="btn btn-primary">Edit</Link>
                <button className="btn btn-danger" onClick={()=>{deleteProduct(productDetails.id)}}>Delete</button>
            </div>
        </>
    )
}

export default Details