import React, { useEffect } from 'react'
import Spinner from '../layout/Spinner';
import UserData from "../Users/UserData";
import UserRepos from "../Users/UserRepos";

function UserDetails(props) {
    /*getUserInfo = { getUserInfo }
    getUserRepos = { getUserRepos }
    user = { user }
    repos = { repos }*/

    useEffect(() => {
        props.getUserInfo(props.match.params.login);
        props.getUserRepos(props.match.params.login)

    }, []);


    if (props.loading) {
        return (
            <Spinner />
        )
    } else {
        return (
            <div>
                <UserData user={props.user} />
                <UserRepos repos={props.repos} />
            </div>
        )
    }
}

export default UserDetails;
