import React, { useState } from 'react'
import {  useSelector,useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateuser } from './features/user/userSlice';


function Update() {
    const users = useSelector((state) => state.user);
    const { id } = useParams();
    const exestinguser = users.filter(f => f.id == id);
    const {name,email} = exestinguser[0];
    const [Newname, setname] = useState(name);
    const [Newemail, setemail] = useState(email);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handelsubmit =(event)=>{
        event.preventDefault();
        
        dispatch(updateuser({ id:id , name:Newname, email:Newemail }));
        navigate('/');
    }
    return (
        <div>
            <h1>update user</h1>
            <form onSubmit={handelsubmit}>
                <div>
                    <label>Name</label>
                    <input type='text' placeholder='enter your name' value={Newname} onChange={(e) => setname(e.target.value)} />
                </div>
                <div>
                    <label>email</label>
                    <input type='email' placeholder='enter your email' value={Newemail} onChange={(e) => setemail(e.target.value)} />
                </div>
                <button type='submit'>update</button>
            </form>
        </div>
    )
}

export default Update