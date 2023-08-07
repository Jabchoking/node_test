import { useDispatch, useSelector } from "react-redux";
import { addTodo, changeInput } from "../../store/modules/todoSlice";

const TodoInput = () => {
    const { text } = useSelector( state => state.todoR )
    const dispatch  = useDispatch() 
    const onSubmit  = (e) => {
        e.preventDefault() 
        if( !text ) return 
        dispatch( addTodo(text) )
        dispatch( changeInput('') )
    } 
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={ text } 
                onChange={e => dispatch( changeInput(e.target.value))}/>
            </form>
        </div>
    );
};

export default TodoInput;