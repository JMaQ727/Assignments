import React, { useState } from "react";

const MakeBox = () => {
    let [color, setColor] = useState("");
    let [colorList, setColorList] = useState([]);
    const submitHandler = (e) => {
        e.preventDefault();
        let newColor = {color}
        setColor("")
        setColorList([...colorList, newColor])
        console.log(colorList)
    }
    return ( <>
        <div>
            <form onSubmit={submitHandler} class="d-inline-flex form-floating mb-3">
                <input type="text" name="" id="" class="form-control" placeholder="color" onChange={(e)=>{setColor(e.target.value)}} value={color}/> <button class="btn btn-primary ms-3">Add</button>
                <label htmlFor="">Color</label>
            </form>
        </div>
        <div class="d-inline-flex flex-wrap">
        {
            colorList.map((colors,i)=>{
                return <div key={i} style={{backgroundColor: colors.color, height: "100px", width: "100px"}} class="m-2">
                </div>
            })
        }
        </div>
    </>
    )
}

export default MakeBox