import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancel, getCustomer, putCustomer } from "../store/modules/customerSlice";

const EditUser = () => {
    const { current  } = useSelector( state => state.customerR ) 
    const [ user , setUser] = useState( current )
    const {id, name , addr } = user 
    const dispatch  = useDispatch() 


   useEffect( () => {
        setUser( current )
    },[current])
 

    const changeInput = e => {
        const { name , value } = e.target 
        setUser({
            ...user ,
            [name] : value 
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        if( !name || !addr ) return  
        dispatch(putCustomer( user ))      
        setUser({
            name:'', addr:''
        })
        setTimeout(()=>{
            dispatch(getCustomer())
        },300)
    }

    return (
       <form onSubmit={ onSubmit } >
            <h2> 어쩌다 마주친 그대 수정</h2>
            <p>
                <label> 이름 </label>
                <input type="text" value={name} name="name" onChange={changeInput}/>
            </p>
            <p>
                <label> 주소 </label>
                <input type="text" value={addr} name="addr" onChange={ changeInput }/>
            </p>
            <p>
                <button type="submit"> 수정 </button>
                <button onClick={() => dispatch(cancel())}> 취소 </button>
            </p>
        </form>
    );
};

export default EditUser;