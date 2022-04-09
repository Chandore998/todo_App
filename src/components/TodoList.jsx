import React from "react";
import Items from "./TodoItem";
import { useSelector } from "react-redux";


const TodoList = ( ) =>{
    
    const fetchData = useSelector((state)=> state.TaskReducer.task)

    let result = () => {
        return (fetchData !== undefined ? fetchData.map((todoitems,index) => 
        <Items key={index} props ={todoitems.data} />
        ) : undefined )
    }

    return (
        <div >
            {result()}
        </div>
    )
}

export default TodoList;