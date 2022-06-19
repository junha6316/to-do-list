
import React, { useState } from "react"


interface IProps{
    input: string;
    onInsert: any;
    onChangeInput: any;
    }
export default function TodoInput({
    input
    ,onInsert
    ,onChangeInput}: IProps){
    
    const [value, setValue] = useState('')
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        onInsert(value)
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