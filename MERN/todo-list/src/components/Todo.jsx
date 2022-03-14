import React, { useState } from "react";

const Todo = () => {
    let [todo, setTodo] = useState("")
    let [todoList, setTodoList] = useState([])
    let [taskComplete, setTaskComplete] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault();
        let newTodo = {todo, taskComplete}
        setTodo("")
        setTodoList([...todoList, newTodo])
        console.log(todoList)
    }
    const completeTask = (i) => {
        let copyList = [...todoList]
        copyList[i].taskComplete = !copyList[i].taskComplete
        setTodoList(copyList)
    }
    const deleteTask = (i) => {
        console.log("deleting at index -->", i)
        let filteredTodoList = todoList.filter((item, index) => {
            return index!=i;
        })
        console.log("filtered ninja list --->", filteredTodoList)
        setTodoList(filteredTodoList)
    }
    return ( 
        <>
        <div>
            <form onSubmit={submitHandler} class="d-inline-flex form-floating mb-3">
                <input type="text" class="form-control" placeholder="To-do" onChange={(e)=>{setTodo(e.target.value)}} value={todo}/>
                <label htmlFor="">To-do</label>
                <button class="btn btn-primary ms-3">Add</button>
            </form>
        </div>
        <div class="d-flex flex-column justify-content-center">
            <ul>
            {
                todoList.map((items,i)=>{
                    return <div key={i}  class="d-flex align-items-center">
                        <li style={{textDecoration: items.taskComplete? "line-through" : ""}}>{items.todo}</li> 
                        <input onClick= {()=>completeTask(i)} type="checkbox" name="" id="" class="ms-2"/>
                        <button onClick={()=>deleteTask(i)} className="btn btn-dark ms-2">Delete</button>
                        </div>
                }
                
                )
            }
            </ul>
        </div>
        </>
    )
}

export default Todo