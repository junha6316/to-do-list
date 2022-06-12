
import { useContext } from "react";
import styled from "styled-components"
import { TodoContext } from "../context";

export interface ITodo{
    id: number;
    text: string;
    done: boolean;
}

interface IProps{
    todo: ITodo
  
}

const TodoText = styled.span`
    padding: 5px 5px;   
    
`

const Container = styled.div`
    padding: 5px 5px;
    display: flex;
    justify-content: space-between;
    border: solid 0.5px black;
`

const BtnContainer = styled.span`
`

export default function TodoItem({todo}: IProps){
    const {dispatchTodoEvent} = useContext(TodoContext)

    const handleDeleteTodo =(id: number)=>{
        dispatchTodoEvent("DELETE_TODO",{id:id})
    }

    const handleDoneTodo =(id: number)=>{
        dispatchTodoEvent("DONE_TODO",{id:id})
    }

    
    return (
    <Container>
        {todo.done ? "o" : "x"}
        <TodoText>{todo.text}</TodoText>
        <BtnContainer>
            <button onClick={()=>handleDeleteTodo(todo.id)}>delete</button>
            <button onClick={()=>handleDoneTodo(todo.id)}>done</button>
        </BtnContainer>
    </Container>
    )
}