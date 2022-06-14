import { useReducer } from "react";
import { ActionTypes, todoReducer } from "../reducer/todos";
import Header from "./Header";
import TodoInput from "./TodoInput";

import TodoList from "./TodoList";

export default function Todos() {
  const [todos, dispatch] = useReducer(todoReducer, [
    { id: 1, text: "todo", done: false },
  ]);

  const createTodo = (text: string) => {
    dispatch({ type: ActionTypes.ADD, payload: { text } });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: ActionTypes.DELETE, paylaod: { id } });
  };

  const doneTodo = (id: number) => {
    dispatch({ type: ActionTypes.DONE, payload: { id } });
  };

  return (
    <div>
      <Header />
      <TodoInput createTodo={createTodo} />
      <TodoList todos={todos} doneTodo={doneTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
