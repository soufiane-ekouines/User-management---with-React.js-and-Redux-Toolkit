import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


function Home() {
    const users = useSelector((state) => state.user);
    console.log(users);
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
                                <button>edit</button>
                                <button>delete</button>
                            </td>
                        </tr>
                    ))}
                </thead>
            </table>
        </div>
    )
}

export default Home