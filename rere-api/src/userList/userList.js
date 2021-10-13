import React from 'react'

function UserList({ onChange, onCreate, username, useremail }) {

    return (
        <div>
            <input name='username' value={username} onChange={onChange} placeholder='name'  />
            <input name='email' value={useremail} onChange={onChange} placeholder='email'  />
            <button onClick={() => onCreate()} >Add</button>
        </div>
    )
}

export default UserList;