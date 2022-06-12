import TodoItem, { ITodo } from "./TodoItem";
import styled from "styled-components";

const Container = styled.div`
    width: 500px;
`
interface IProps{
    todos: ITodo[]
    doneTodo: (id: number) => void
    deleteTodo: (id: number) => void
}
export default function TodoList({todos,doneTodo,deleteTodo}: IProps){

    return <Container>
        {todos.map(todo=>
            <TodoItem key={todo.id} todo={todo} doneTodo={doneTodo} deleteTodo={deleteTodo}/>
            )}
    </Container>
}