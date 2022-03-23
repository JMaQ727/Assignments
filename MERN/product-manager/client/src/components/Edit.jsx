import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Edit = () => {
    let [title, setTitle] = useState("")
    let [price, setPrice] = useState("")
    let [description, setDescription] = useState("")
    const { id } = useParams();
    const history = useHistory();
    let [productDetails, setProductDetails] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log("SHOULD BE ONE PRODUCT:", res.data);
                setProductDetails(res.data.results);
            })
            .catch((err) => {
                console.log("we got issues bro~~~", err);
            });
    }, []);
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product${id}`, productDetails)
            .then(res=>{
                console.log("UPDATED FAM LEGGO", res)
                history.push("/")
            })
            .catch(err=>{
                console.log("what now?!?!?!?!", err)
            })
    }
    return (
        <>
            <div>
                <form onSubmit={()=>submitHandler}>
                    <label htmlFor="">Title: </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={productDetails.title}
                    />
                    <label htmlFor="">Price: </label>
                    <input
                        type="number"
                        className="form-control"
                        onChange={(e) => setPrice(e.target.value)}
                        value={productDetails.price}
                    />
                    <label htmlFor="">Description: </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setDescription(e.target.value)}
                        value={productDetails.description}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary mt-3"
                    />
                </form>
            </div>
        </>
    );
};

export default Edit;
