import TodoItem, { ITodo } from "./TodoItem";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
`;
interface IProps {
  todos: ITodo[];
  deleteTodo: (id: number) => void;
  updateTodo: (todo: ITodo) => void;
}

export default function TodoList({ todos, updateTodo, deleteTodo }: IProps) {
  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </Container>
  );
}
