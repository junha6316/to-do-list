import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  addTodo,
  changeTodoInput,
  clearAllTodos,
  removeTodo,
  TodoState,
  toggleTodoStatus,
} from "../modules/todos";
import Todos from "../components/Todos";

type PropsDispatch = ReturnType<typeof mapDispatchToProps>;
type PropsState = ReturnType<typeof mapStateToProps>;

interface Props extends PropsState, PropsDispatch {}

const TodosContainer = ({
  todos,
  input,
  clearAllTodos,
  onRemove,
  onInsert,
  onToggle,
  changeTodoInput,
}: Props) => {
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
  );
};

const mapStateToProps = (state: TodoState) => ({
  input: state.input,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeTodoInput: (input: string) => {
    dispatch(changeTodoInput(input));
  },

  clearAllTodos: () => {
    dispatch(clearAllTodos());
  },
  onRemove: (id: number) => {
    dispatch(removeTodo(id));
  },
  onInsert: (input: string) => {
    dispatch(addTodo(input));
  },
  onToggle: (id: number) => {
    dispatch(toggleTodoStatus(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
