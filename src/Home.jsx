import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteuser } from './features/user/userSlice';


function Home() {
    const users = useSelector((state) => state.user);

    const despatch = useDispatch();

    const deleteusers = (id) => {
        despatch(deleteuser({ id: id }));
        console.log(id);
    }
    return (
        <div className='container'>
            <h2>App Json Server</h2>
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {users.map((user, index) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} >edit</Link>
                                <button onClick={() => deleteusers(user.id)}>delete</button>
                            </td>
                        </tr>
                    ))}
                </thead>
            </table>
        </div>
    )
}

export default Home