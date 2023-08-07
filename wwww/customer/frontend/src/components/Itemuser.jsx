import { useDispatch } from "react-redux";
import { delCustomer, editCustomer, getCustomer } from "../store/modules/customerSlice";
import { useEffect } from "react";


const Itemuser = ({item}) => {
    const { id , name, addr } = item 
    const dispatch  = useDispatch() 
    // useEffect(()=>{setTimeout(()=>{dispatch(getCustomer())},200)},[dispatch])
    const del = () => {
        dispatch(delCustomer(id))
        setTimeout(()=>{
            dispatch(getCustomer())
        },100)
    }
    return (
        <tr>
           <td>{name}</td> 
           <td>{addr} </td> 
           <td>
                <button onClick={ () => dispatch(editCustomer(id) ) }>수정</button>
                <button onClick={del}>삭제</button>
            </td> 
        </tr>
    );
};

export default Itemuser;