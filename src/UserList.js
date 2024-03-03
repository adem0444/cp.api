import React from 'react'

const UserList = ({user}) => {
  return (
    <div className='users'>
      <h1>{user.name}</h1>
      <h2>{user.username}</h2>
      <h3>{user.email}</h3>
      <h4>{user.adress}("street";"suite""city""zipcode""geo")
      </h4>
      
    </div>
  )
}

export default UserList
