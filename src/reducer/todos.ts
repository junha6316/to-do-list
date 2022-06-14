import { ITodo } from "../components/TodoItem";

export enum ActionTypes {
  ADD = "ADD",
  DONE = "DONE",
  DELETE = "DELETE",
}

type DoneAction = {
  type: ActionTypes.DONE;
  payload: { id: number };
};

type ADDAction = {
  type: ActionTypes.ADD;
  payload: { text: string };
};

type DeleteAction = {
  type: ActionTypes.DELETE;
  paylaod: { id: number };
};

type Action = DoneAction | ADDAction | DeleteAction;

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

    case ActionTypes.DONE:
      const targetTodo = state.find(
        ({ id: todoId }) => todoId === action.payload.id
      );
      if (targetTodo) {
        const filteredTodos = state.filter(
          ({ id: todoId }) => todoId !== action.payload.id
        );
        return [
          ...filteredTodos,
          { id: targetTodo.id, text: targetTodo.text, done: true },
        ];
      }
      return state;

    default:
      return state;
  }
};
