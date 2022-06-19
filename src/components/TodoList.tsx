import TodoItem, { ITodo } from "./TodoItem";
import styled from "styled-components";

const Container = styled.div`
    width: 500px;
`
interface IProps{
    todos: ITodo[];
    onRemove: (id: number)=> void;
    onToggle: (id: number)=> void;
}

export default function TodoList({todos
    ,onRemove
    ,onToggle}: IProps){

    return <Container>
        {todos.map(todo=>
            <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
            )}
    </Container>
}