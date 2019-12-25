import React from 'react'
import Users from '../Users/Users';
import UsersForm from '../Users/UsersForm';
function Home({ getUsers, users, loading }) {
    return (
        <div>
            <UsersForm getUsers={getUsers} />
            <Users users={users} loading={loading} />
        </div>
    )
}

export default Home
