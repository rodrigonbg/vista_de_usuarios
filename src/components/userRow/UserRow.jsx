import React from 'react'

const UserRow = (user) => {
  return (
    <section className='userRow' id={user.role == 'admin' && 'admin'}>
          <div className='id'> {user.id} </div>
          <div className='nombre'> {user.firstname} </div>
          <div className='email'> {user.email} </div>
          <div className='edad'> {user.age} </div>
    </section>
  )
}

export default UserRow