import React, { useState } from "react";

const ToDoAppMain = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todo, setTodo] = useState([]);
    const [edit, setEdit] = useState(null);
    const addTask = (e) => {
        e.preventDefault();
        if(title === "" || description === ""){
            alert("Please fill the required inputs.");
            return;
        }
        const newTodo = {
            id: Date.now(),
            title,
            description,
        }
        setTodo([...todo, newTodo]);
        setTitle("");
        setDescription("");
    };
    const removeTask = (id) => {
        const removedTodo = todo.filter((todos)=>todos.id !== id);
        setTodo(removedTodo);
    };
    const editTask = (id) => {
        const editedTodo = todo.find((todos)=>todos.id === id);
        setTitle(editedTodo.title);
        setDescription(editedTodo.description);
        setEdit(id);
    };
    const updateTask = () => {
        if(title === "" || description === ""){
            alert("Please fill the required inputs.");
            return;
        };
        const updatedTodo = todo.map((todos)=>{
            if(todos.id === edit){
                return {
                    ...todos,
                    title,
                    description
                }
            }
            return todos;
        });
        setTodo(updatedTodo);
        setTitle("");
        setDescription("");
        setEdit(null);
    };
    return(
        <div className="bw_wrap_sec">
            <h1>To Do App</h1>
            <div className="bw_container">
                <div className="bw_todo_wrap"> 
                    <form action="" className="bw_todo_form">
                        <div className="bw_label_input">
                            <label htmlFor="title" className="bw_label">Title:-</label>
                            <input type="text" className="bw_input" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                        </div>
                        <div className="bw_label_input">
                            <label htmlFor="description" className="bw_label">Description:-</label>
                            <input type="text" className="bw_input" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                        </div>
                        <div className="bw_cont_btn">
                            <button className="bw_btn bw_primary_btn" type="button" onClick={addTask}>Add</button> 
                            <button className="bw_btn bw_primary_btn" type="button" onClick={updateTask}>Update</button>
                        </div>
                    </form>
                    <div className="bw_todo_card_cont">  
                       {
                            todo.map((todoapp)=>(
                                <div className="bw_todo_card" key={todoapp.id}>
                                    <h4>{todoapp.title}</h4>
                                    <p>{todoapp.description}</p>
                                    <div className="bw_cont_btn">
                                        <button className="bw_btn bw_btn_success" type="button" onClick={()=>editTask(todoapp.id)}>Edit</button>
                                        <button className="bw_btn bw_dark_btn" type="button" onClick={()=>removeTask(todoapp.id)}>Delete</button>
                                    </div>
                                </div> 
                            ))
                       }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoAppMain;