import { useState } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Todos(){

    const [todos, setTodos]= useState([
        {id:1, text: "todo", done: false}
    ])

    const createTodo = (text:string) =>{
        setTodos((prev)=>{
            return [...prev, {id:2, text, done:false}]
        })
    }


    return <div>
        <Header />
        <TodoInput createTodo={createTodo}/>
        <TodoList todos={todos}/>
    </div>
}