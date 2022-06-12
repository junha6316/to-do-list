import { useState } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import { ITodo } from "./TodoItem";
import TodoList from "./TodoList";

export default function Todos(){

    const [todos, setTodos]= useState<ITodo[]>([
        {id:1, text: "todo", done: false}
    ])

    const createTodo = (text:string) =>{
        setTodos((prev)=>{

            return [...prev, {
                id: prev[prev.length -1].id +1
                , text, done:false}]
        })
    }

    const deleteTodo = (id: number) => {
        setTodos(prev=>prev.filter(todo=> todo.id !== id))
    }
    const doneTodo = (id: number) =>{
        setTodos((prev)=>{
            const targetTodo = prev.find(({id:todoId}) => todoId===id)
            if (targetTodo){
                const filteredTodos = prev.filter(({id:todoId}) => todoId!==id)
                return [...filteredTodos, {id: targetTodo.id, text:targetTodo.text, done: true}]
            } 
            return prev
        })
    }

    return <div>
        <Header />
        <TodoInput createTodo={createTodo}/>
        <TodoList todos={todos} doneTodo={doneTodo} deleteTodo={deleteTodo}/>
    </div>
}