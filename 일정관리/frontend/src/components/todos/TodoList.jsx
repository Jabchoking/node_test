import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";


const TodoList = () => {
    const { data } = useSelector( state => state.todoR )
    return (
        <ul>
           {
            data.map( item => <TodoItem key={item.id} item={item} />)
           } 
        </ul>
    );
};

export default TodoList;