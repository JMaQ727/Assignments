import React, {useState, useEffect} from 'react';
import {useHistory, Link} from "react-router-dom";
import axios from 'axios'

const AllProducts = (props) => {
    let [productList, setProductList] = useState([]);
    const history = useHistory();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
            .then(res=>{
                console.log("we gettin all the products---", res)
                setProductList(res.data.results)
            })
            .catch(err=>{
                console.log("uh oh we got a problem---",err)
            })
    },[props.formSubmitted])
    const deleteProduct = (theId) =>{
        axios.delete(`http://localhost:8000/api/product/${theId}`)
            .then(res=>{
                console.log("DELETED!!!!!!", res);
                props.setFormSubmitted(!props.formSubmitted)
            })
            .catch(err=>{
                console.log("problems deleting this", err)
            })
    }
    return(
        <>
            <h2>List of Products</h2>
            {
                productList.map((productObj)=>{
                    return (
                        <div className="mb-3">
                            <h4><Link to={`/details/${productObj._id}`}>{productObj.title}</Link></h4>
                            <button className="btn btn-danger" onClick={()=>{deleteProduct(productObj._id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default AllProducts
