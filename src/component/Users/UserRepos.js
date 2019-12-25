import React from 'react'

function UserRepos({ repos }) {
    console.log(repos)
    return (
        <>
            {repos.map((repo) => (
                <div className="badge" key={repo.id}>
                    <a href={repo.html_url} target="_blank"> {repo.name}</a>
                </div>
            ))}

        </>
    )
}

export default UserRepos;
