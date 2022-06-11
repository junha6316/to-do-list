import TodoItem, { ITodo } from "./TodoItem";
import styled from "styled-components";

const Container = styled.div`
    width: 500px;
`
interface IProps{
    todos: ITodo[]
}
export default function TodoList({todos}: IProps){

    return <Container>
        {todos.map(todo=>
            <TodoItem todo={todo} />
            )}
    </Container>
}