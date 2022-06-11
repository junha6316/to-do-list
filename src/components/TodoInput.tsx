import { eventNames } from "process"
import React, { useState } from "react"


interface IProps{
    createTodo: (text: string) => void
}
export default function TodoInput({createTodo}: IProps){
    
    const [value, setValue] = useState('')
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        createTodo(value)
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