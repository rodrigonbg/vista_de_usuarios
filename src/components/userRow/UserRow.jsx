import React from 'react'
import './UserRow.css'
import { Link } from 'react-router-dom'

const UserRow = ({user}) => {
  return (
    <section className='userRow' id={user.role == 'admin' && 'admin'}>
          <div className='id'> {user.id} </div>
          <Link to={`/Usuarios/${user.id}`} className='nombre'> {user.firstName} {user.lastName} </Link>
          <div className='email'> {user.email} </div>
          <div className='edad'> {user.age} </div>
    </section>
  )
}

export default UserRow