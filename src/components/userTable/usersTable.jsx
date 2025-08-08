import React, { useEffect, useState } from 'react';
import './userTable.css';
import UserRow from './../userRow/UserRow';

const UsersTable = (props) => {

  return (
    <section className='table'>

        <section className='headUserTable'>
          <div className='id'> ID </div>
          <div className='nombre'> Nombre </div>
          <div className='email'> Email </div>
          <div className='edad'> Edad </div>
        </section>

        <section className='bodyUserTable'>
          {
            props.loading?
              <span>loading .. </span>
              :
              props.users.map(user => (
                <UserRow  key={user.id} user={user}/>
              ))
          }
        </section>

        <span className='msg'>para ver un usuario en detalle, hacer click sobre su nombre.</span>

    </section>
  )
}

export default UsersTable