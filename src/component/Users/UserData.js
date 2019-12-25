import React from 'react'

function UserData({ user: { avatar_url,
    login,
    location,
    bio,
    public_repos,
    public_gists,
    followers,
    following
} }) {

    return (
        <div className="card text-center">
            <img className="round-img"
                src={avatar_url}
                alt={login}
                style={{
                    width: "20%",
                    display: "block",
                    margin: "0 auto"
                }} />
            <h1>{login}</h1>
            <h2>{location}</h2>
            <p>{bio}</p>

            <span className="badge badge-light"> Repos: {public_repos}</span>
            <span className="badge badge-dark"> Gists: {public_gists}</span>
            <span className="badge badge-danger"> Followers: {followers}</span>
            <span className="badge badge-success"> Following: {following}</span>
        </div>
    )
}

export default UserData
