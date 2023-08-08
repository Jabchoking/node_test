import React, { memo, useEffect, useState } from 'react';
import firebase from '../firebase'
import { useDispatch } from 'react-redux';
import { joindudot } from '../store/modules/userslice';
const Join = memo(() => {
    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [pw, setpw] = useState('')
    const [pwch, setpwch] = useState('')
    const [email, setemail] = useState('')

    const onsubmit = async (e) => {
        e.preventDefault()
        if (!name && !pw && !pwch && !email) {
            alert('빈칸을 모두 채워주세요')
        }
        if (pw !== pwch) {
            alert('비밀번호를 확인해주세요')
        }
        let cruser = await firebase.auth().createUserWithEmailAndPassword(email , pw)
        await cruser.user.updateProfile({
            displayName: name
        })
        console.log( cruser )
        console.log( cruser.user )
        let body = {
            email : cruser.user.multiFactor.user.email,
            displayName : cruser.user.multiFactor.user.displayName,
            uid : cruser.user.multiFactor.user.uid
        };
        useEffect(()=>{
            setTimeout(() => {
                dispatch(joindudot(body))
            }, 200);
        },[])
    }


    return (
        <div>
            <h2>회원가입</h2>
            <form onSubmit={onsubmit} >
                <p>
                    <span>아이디</span>
                    <input type="text" onChange={e => setname(e.target.value)} />
                </p>
                <p>
                    <span>비밀번호</span>
                    <input type="password" onChange={e => setpw(e.target.value)} />
                </p>
                <p>
                    <span>비밀번호 확인</span>
                    <input type="password" onChange={e => setpwch(e.target.value)} />
                </p>
                <p>
                    <span>이메일</span>
                    <input type="email" onChange={e => setemail(e.target.value)} />
                </p>
                <p>
                    <button type='submit' >회원가입</button>
                </p>
            </form>
        </div>
    );
});

export default Join;