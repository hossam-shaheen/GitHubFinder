import React from 'react'
import {
    Link
} from 'react-router-dom';
function UsersItem({ users }) {
    console.log(users)
    return (
        <div className="row" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '1rem'
        }}>

            {users.map(user => (

                <div className="card" key={user.id}>
                    <img src={user.avatar_url} alt={user.login} />
                    <h1>{user.login}</h1>
                    <Link to={`/users/${user.login}`} className="btn btn-dark">More</Link>
                </div>
            ))
            }
        </div>
    )
}

export default UsersItem
