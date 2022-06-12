import { useState } from "react";
import { TodoContext } from "../context";
import Header from "./Header";
import TodoInput from "./TodoInput";
import { ITodo } from "./TodoItem";
import TodoList from "./TodoList";
import {ITodoActionType, ActionPayload} from "../context"

export default function Todos(){
    const [todos, setTodos]= useState<ITodo[]>([
        {id:1, text: "todo", done: false}
    ])

    const dispatchTodoEvent = (actionType: ITodoActionType, {text, id}: ActionPayload)=> {
        switch (actionType) {
            case "CREATE_TODO":
                if (text){
                    console.log(text)
                    setTodos((prev) =>  [...prev, {
                        id: prev[prev.length -1].id +1, text, done:false
                    }
                ])}
                return;
            case "DONE_TODO":
                setTodos((prev)=>{
                    const targetTodo = prev.find(({id:todoId}) => todoId===id)
                    if (targetTodo){
                        const filteredTodos = prev.filter(({id:todoId}) => todoId!==id)
                        return [...filteredTodos, {id: targetTodo.id, text:targetTodo.text, done: true}]
                    } 
                    return prev
                })
                return;
            case "DELETE_TODO":
                setTodos(prev=>prev.filter(todo=> todo.id !== id))
                return;
            default:
                return;
        }
    }


    return (
    <TodoContext.Provider value={{todos, dispatchTodoEvent}}>
        <Header />
        <TodoInput />
        <TodoList />
    </TodoContext.Provider>
    )
}