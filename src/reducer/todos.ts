import { act } from "react-dom/test-utils";
import { ITodo } from "../components/TodoItem";

export enum ActionTypes {
  ADD = "ADD",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

type UPDATEAction = {
  type: ActionTypes.UPDATE;
  payload: { todo: ITodo };
};

type ADDAction = {
  type: ActionTypes.ADD;
  payload: { text: string };
};

type DeleteAction = {
  type: ActionTypes.DELETE;
  paylaod: { id: number };
};

type Action = UPDATEAction | ADDAction | DeleteAction;

export const todoReducer = (state: ITodo[], action: Action): ITodo[] => {
  switch (action.type) {
    case ActionTypes.ADD:
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          text: action.payload.text,
          done: false,
        },
      ];
    case ActionTypes.DELETE:
      return state.filter((todo) => todo.id !== action.paylaod.id);

    case ActionTypes.UPDATE:
      const targetTodo = state.find(
        ({ id: todoId }) => todoId === action.payload.todo.id
      );
      if (targetTodo) {
        const filteredTodos = state.filter(
          ({ id: todoId }) => todoId !== action.payload.todo.id
        );
        return [...filteredTodos, { ...action.payload.todo }];
      }
      return state;

    default:
      return state;
  }
};
