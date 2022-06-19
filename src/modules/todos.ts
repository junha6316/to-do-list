

const CHANGE_TODO_INPUT = "CHANGE_TODO_INPUT" as const
const ADD_TODO= "ADD_TODO" as const
const TOGGLE_TODO_STATUS= "TOGGLE_TODO_STATUS" as const
const REMOVE_TODO= "REMOVE_TODO" as const
const CLEAR_ALL_TODOS= "CLEAR_ALL_TODOS" as const

export const changeTodoInput = (input: string)=>({type: CHANGE_TODO_INPUT, input});
export const clearAllTodos = () =>({type: CLEAR_ALL_TODOS});


export interface TodoState{
    input:string
    todos: Array<any>,
    nextTodoId: number

}

const initialState: TodoState ={
    input:"",
    todos:[],
    nextTodoId: 1,
}

type TodoAction = {
    action: string,
    type: string,
    input: string
}

function todos(state: TodoState= initialState, action: TodoAction){
    switch (action.type) {
        case CHANGE_TODO_INPUT:
            return {
                ...state,
                input: action.input,
            }
            break;
    
        default:
            return state;
            break;
    }
}


export default todos;