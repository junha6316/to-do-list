import { useReducer } from "react";
import { ActionTypes, todoReducer } from "../reducer/todos";
import Header from "./Header";
import TodoInput from "./TodoInput";
import { ITodo } from "./TodoItem";

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

  const updateTodo = (todo: ITodo) => {
    dispatch({ type: ActionTypes.UPDATE, payload: { todo } });
  };

  return (
    <div>
      <Header />
      <TodoInput createTodo={createTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
