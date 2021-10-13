import React from 'react'

function User ({user}) {
    return(
        <li>
            {user.username} {user.email}
        </li>
    )
}

function UserList({users}) {

    return (
        <div>
            {users.map(user => (
                <User user={user} />
            ))}
        </div>
    )
}
export default UserList;