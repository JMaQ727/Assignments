import React, { useEffect, useState } from "react";
import axios from "axios";

const Students = () => {
    let [student, setStudent] = useState([]);
    let [loaded, setLoaded] = useState(false);
    let [hide, setHide] = useState([]);
    let [newTag, setNewTag] = useState("");
    let [searchName, setSearchName] = useState("");
    let [searchTag, setSearchTag] = useState("");
    const fetchData = async () => {
        const response = await axios.get(
            "https://api.hatchways.io/assessment/students"
        );
        setStudent(response.data.students);
        setHide(response.data.students.map(student => true));
        setLoaded(true);
    };
    const updateHide = (e, index) => {
        e.preventDefault();
        let newHide = [...hide]
        newHide[index] = !newHide[index]
        setHide(newHide)
    };
    const submitHandler = (e, index) => {
        e.preventDefault();
        if ("tag" in student[index] === true) {
            student[index].tag = [...student[index].tag, newTag]
        } else {
            student[index].tag = [newTag]
        }
        setNewTag("");
        e.target.reset();
    };     
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <div className="container">
                <input type="text" id="search" placeholder="Search by name" onChange={(e) => setSearchName(e.target.value)} />
                <input type="text" id="search" placeholder="Search by tag" onChange={(e) => setSearchTag(e.target.value)}/>
                {loaded
                    ? student.filter((val) => {
                        if (searchName === "") {
                            return val
                        } else if (val.firstName.toLowerCase().includes(searchName.toLowerCase()) || val.lastName.toLowerCase().includes(searchName.toLowerCase())) {
                            return val
                        } else if (val.tag === true && val.tag.toLowerCase().includes(searchTag.toLowerCase())) {
                            return val
                        }
                    }).map((obj, idx) => {
                        return (
                        <div key={idx} className="student">
                            <div className="left">
                                <img src={`${obj.pic}`} alt="Student Profile" />
                            </div>
                            <div className="center">
                                <h1>{obj.firstName.toUpperCase()} {obj.lastName.toUpperCase()}</h1>
                                <p>Email: {obj.email}</p>
                                <p>Company: {obj.company}</p>
                                <p>Skill: {obj.skill}</p>
                                <p>Average: {(obj.grades.map(Number).reduce((a,b) => a + b, 0)) / obj.grades.length}%</p>
                                {hide[idx] === false? obj.grades.map((gradeObj, idx) => {
                                    return (
                                        <p key={idx}>Test {idx + 1}: {gradeObj}%</p>
                                    )}) : null}
                                {obj.tag? obj.tag.map((tag, idx) => {
                                    return (
                                        <button key={idx}>{tag}</button>
                                    )}) : null}
                                <br/>
                                <form onSubmit={(e) => submitHandler(e, idx)}>
                                    <input type="text" id="thetag" placeholder="Add a tag" onChange={(e) => setNewTag(e.target.value)} />
                                </form>
                            </div>
                            <div className="right">
                                {hide[idx] === false? <button onClick={(e) => updateHide(e,idx)}>-</button> : <button onClick={(e) => updateHide(e,idx)}>+</button> }
                            </div>
                        </div>);
                    })
                    : null }
            </div>
        </>
    );
};

export default Students;
