import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const Authors = () => {
    let [authorsList, setAuthorsList] = useState([]);
    let [delAuthor, setDelAuthor] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log("WE GOT THIS", res);
                setAuthorsList(res.data.results);
            })
            .catch((err) => {
                console.log("PROBLEMS", err);
            });
    }, [delAuthor]);
    const deleteAuthor=(theId) =>{
        axios.delete(`http://localhost:8000/api/authors/${theId}`)
            .then(res=>{
                console.log("DELETED THIS GUY", res)
                setDelAuthor(!delAuthor)
            })
            .catch(err=>{
                console.log("CANNOT DELETE THIS GUY", err)
            })
    }
    return (
        <>
            <Link to="/create" className="btn btn-primary">Add Author</Link>
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Author</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    {authorsList.map((authors) => {
                        return (
                            <>
                                <tr>
                                    <td>{authors.name}</td>
                                    <td><Link to={`./authors/${authors._id}`} className="btn btn-primary">Edit</Link> <button className="btn btn-danger" onClick={()=>deleteAuthor(authors._id)}>Delete</button></td>
                                </tr>
                            </>
                        );
                    })}
                </table>
            </div>
        </>
    );
};

export default Authors;
