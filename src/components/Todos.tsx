import { useState } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import { ITodo } from "./TodoItem";
import TodoList from "./TodoList";


interface Props {

    readonly input: string;
    readonly todos: ITodo[];
    readonly onRemove: (id: number)=> void;
    readonly onToggle: (id: number)=> void;
    readonly onClearAll: ()=> void;
    readonly onInsert:(input:string) => void;
    readonly onChangeInput: (input:string) => void;
}

export default function Todos({
    input,
    todos,
    onRemove,
    onToggle,
    onClearAll,
    onInsert,
    onChangeInput
}: Props){

    return <div>
        <Header />
        <TodoInput input={input} onInsert={onInsert} onChangeInput={onChangeInput} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </div>
}