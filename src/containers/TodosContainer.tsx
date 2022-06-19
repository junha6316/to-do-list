import React from "react";
import {connect } from "react-redux"
import { Dispatch } from "redux";
import { changeTodoInput, clearAllTodos, TodoState } from "../modules/todos";
import Todos from "../components/Todos"


type PropsDispatch = ReturnType<typeof mapDispatchToProps>;
type PropsState = ReturnType<typeof mapStateToProps>;

interface Props extends PropsState, PropsDispatch {}


const TodosContainer = ({todos,input, clearAllTodos, onRemove
    ,onInsert
    ,onToggle
    ,changeTodoInput }: Props) =>{
    return (
        <Todos 
            todos={todos}
            input={input} 
            onClearAll={clearAllTodos}
            onRemove={onRemove}
            onInsert={onInsert}
            onToggle={onToggle}
            onChangeInput={changeTodoInput}
            />
    )
}

const mapStateToProps = (state: TodoState) => ({
    input: state.input,
    todos: state.todos
})

const mapDispatchToProps = (dispatch: Dispatch) =>({
    
    changeTodoInput: (input: string)=>{
        dispatch(changeTodoInput(input));
    },

    clearAllTodos: ()=>{
        dispatch(clearAllTodos());
    },
    onRemove:(id:number)=>{},
    onInsert: () =>{},
    onToggle:(id:number)=>{},
    
})


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodosContainer)
