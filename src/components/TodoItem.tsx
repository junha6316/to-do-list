
import styled from "styled-components"

export interface ITodo{
    id: number;
    text: string;
    done: boolean;
}

interface IProps{
    todo: ITodo;
    onRemove: (id: number)=> void;
    onToggle: (id: number)=> void;
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

export default function TodoItem({todo
    ,onRemove
    ,onToggle}: IProps){

    
    return (
    <Container>
        {todo.done ? "o" : "x"}
        <TodoText>{todo.text}</TodoText>
        <BtnContainer>
            <button onClick={()=>onRemove(todo.id)}>delete</button>
            <button onClick={()=>onToggle(todo.id)}>done</button>
        </BtnContainer>
    </Container>
    )
}