import React, { useEffect, useState } from "react";
import axios from "axios";

const Students = () => {
    let [student, setStudent] = useState([]);
    let [loaded, setLoaded] = useState(false);
    let [hide, setHide] = useState(true);
    let [searchTerm, setSearchTerm] = useState("")
    let [searchTag, setSearchTag] = useState("")
    const fetchData = async () => {
        const response = await axios.get(
            "https://api.hatchways.io/assessment/students"
        );
        setStudent(response.data.students);
        setLoaded(true);
    };
    useEffect(() => {
        fetchData();
    }, []);
    console.log(student);
    console.log(hide, "TST")
    console.log(hide[1],"AY?")
    return (
        <>
            <div className="container">
                <input type="text" id="search" placeholder="Search by name" onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="text" id="search" placeholder="Search by tag" onChange={(e) => setSearchTag(e.target.value)}/>
                {loaded
                    ? student.filter((val) => {
                        if (searchTerm === "") {
                            return val
                        } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || val.lastName.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((obj, idx) => {
                        return (
                        <div key={idx} className="student">
                            <div className="left">
                                <img src={`${obj.pic}`} alt="Student Profile" />
                            </div>
                            <div className="center">
                                <h1>{idx} {obj.firstName.toUpperCase()} {obj.lastName.toUpperCase()}</h1>
                                <p>Email: {obj.email}</p>
                                <p>Company: {obj.company}</p>
                                <p>Skill: {obj.skill} {obj.grades}</p>
                                <p>Average: {(obj.grades.map(Number).reduce((a,b) => a + b, 0)) / obj.grades.length}%</p>
                                {hide === false? obj.grades.map((gradeObj, idx) => {
                                    return (
                                    <p>Test {idx + 1}: {gradeObj}%</p>
                                    )}) : null}
                                <button>tag1</button><br/>
                                <input type="text" id="tag" placeholder="Add a tag" />
                            </div>
                            <div className="right">
                                {hide === false? <button onClick={(e) => setHide(!hide)}>-</button> : <button onClick={(e) => setHide(!hide)}>+</button> }                     
                            </div>
                        </div>);
                    })
                    : null }
            </div>
        </>
    );
};

export default Students;
