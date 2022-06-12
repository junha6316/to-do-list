
import styled from "styled-components"

export interface ITodo{
    id: number;
    text: string;
    done: boolean;
}

interface IProps{
    todo: ITodo
    doneTodo: (id: number)=> void
    deleteTodo: (id: number)=> void
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

export default function TodoItem({todo, deleteTodo, doneTodo}: IProps){

    
    return (
    <Container>
        {todo.done ? "o" : "x"}
        <TodoText>{todo.text}</TodoText>
        <BtnContainer>
            <button onClick={()=>deleteTodo(todo.id)}>delete</button>
            <button onClick={()=>doneTodo(todo.id)}>done</button>
        </BtnContainer>
    </Container>
    )
}