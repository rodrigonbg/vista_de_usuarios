import React from 'react'
import './UserRow.css'

const UserRow = ({user}) => {
  return (
    <section className='userRow' id={user.role == 'admin' && 'admin'}>
          <div className='id'> {user.id} </div>
          <div className='nombre'> {user.firstName} {user.lastName} </div>
          <div className='email'> {user.email} </div>
          <div className='edad'> {user.age} </div>
    </section>
  )
}

export default UserRow