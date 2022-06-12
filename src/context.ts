import {createContext} from 'react';
import { ITodo } from "./components/TodoItem";


export type ITodoActionType = "CREATE_TODO"|"DONE_TODO"|"DELETE_TODO"
export type ActionPayload = {
    text?: string;
    id?: number;
}

interface ITodoContext{
    todos:ITodo[];
    dispatchTodoEvent: (actionType: ITodoActionType, payload: ActionPayload) => void
}

export const TodoContext = createContext<ITodoContext>({
    todos:[],
    dispatchTodoEvent: (actionType, payload) => null
});
