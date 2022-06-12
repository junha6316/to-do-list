import TodoItem, { ITodo } from "./TodoItem";
import styled from "styled-components";
import { useContext } from "react";
import { TodoContext } from "../context";

const Container = styled.div`
    width: 500px;
`
interface IProps{
    todos: ITodo[]
    doneTodo: (id: number) => void
    deleteTodo: (id: number) => void
}
export default function TodoList(){

    const {todos} = useContext(TodoContext)

    return <Container>
        {
        todos.map(todo=>
            <TodoItem key={todo.id} todo={todo}/>
            )
            }
    </Container>
}