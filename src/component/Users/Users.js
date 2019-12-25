import React from 'react';
import Spinner from "../layout/Spinner";
import UsersItem from "./UsersItem";
import PropTypes from 'prop-types';

function Users({ users, loading }) {
    return (
        <div>
            {loading ? <Spinner /> : <UsersItem users={users} />}
        </div>
    )
}
Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

export default Users
