import { eventNames } from "process"
import React, { useContext, useState } from "react"
import { TodoContext } from "../context"



export default function TodoInput(){
    
    const [value, setValue] = useState('')
    const {dispatchTodoEvent} = useContext(TodoContext)
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        dispatchTodoEvent("CREATE_TODO", {text:value})
        setValue('')

    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }

    return <form onSubmit={onSubmit}>
        <input onChange={onChange} value={value} placeholder="Write what you do" />
        <button type="submit" >submit</button>
    </form>
    
}