import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = memo(() => {
    const [name , setname] = useState('')
    const [email , setemail] = useState('')
    const [pw , setpw] = useState('')
    const nav = useNavigate()
    const login = e => {
        e.preventDefault()

    }
    const join = e => {
        e.preventDefault()
        nav('/join')
    }
    return (
        <div style={{width:500,margin:'50px auto'}}>
            <h2>로그인</h2>
            <form>
                <p>
                    <span>아이디</span>
                    <input type="text" onChange={e=>setname(e.target.value)} />
                </p>
                <p>
                    <span>비밀번호</span>
                    <input type="password" onChange={e=>setpw(e.target.value)} />
                </p>
                <p>
                    <span>이메일</span>
                    <input type="email" onChange={e=>setemail(e.target.value)} />
                </p>
                <p>
                    <button>확인</button>
                </p>
                <p>
                    <button onClick={join} >회원가입</button>
                </p>
            </form>
        </div>
    );
});

export default Login;