import TodoItem from "./TodoItem";

export default function TodoList(){

    const todos =[
        {id:1, text: "todo", done: false}
    ]
    return <div>
        {todos.map(todo=>
            <TodoItem todo={todo} />
            )}
    </div>
}