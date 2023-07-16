import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { adduser } from './features/user/userSlice';
import { useNavigate } from 'react-router-dom';


function Create() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const users = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handelSubmit = (event) => {
        event.preventDefault(); 
        dispatch(adduser({ id: users[users.length - 1].id + 1, name, email }));
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <div>
                    <label>Name</label>
                    <input type='text' placeholder='enter your name' value={name} onChange={(e) => setname(e.target.value)} />
                </div>
                <div>
                    <label>email</label>
                    <input type='email' placeholder='enter your email' value={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default Create