
import styled from "styled-components"

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
`

const BtnContainer = styled.span``
export default function TodoItem({todo}: IProps){

    return (
    <Container>
        <TodoText>{todo.text}</TodoText>
        <BtnContainer>
            <button>delete</button>
            <button>done</button>
        </BtnContainer>
    </Container>
    )
}