

interface ITodo{
    id: number;
    text: string;
    done: boolean;
}

interface IProps{
    todo: ITodo
}
export default function TodoItem({todo}: IProps){

    return <h1>{todo.text}</h1>
}