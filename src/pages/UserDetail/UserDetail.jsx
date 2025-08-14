import React, { useEffect, useState } from 'react'
import './UserDetail.css'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getUserByID } from '../../services/users';

const UserDetail = () => {
    
    const navegate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        setLoading(true);

        const fetchUser = async () => {
            const data = await getUserByID(id);
            setUser(data);
            setLoading(false);
            console.log(data)

        }
        fetchUser();

    },[id])

    
    return (
        <div className='detail_container'>
            {loading ? 
                <>Loading ...</>
                :
                <>
                    <div className='header'>
                        <h1>{user.firstName} {user.lastName}</h1>
                        <img className='userimg' src={user.image}/>
                    </div>

                    <p><span>Género:</span> {user.gender}</p>
                    <p><span>Teléfono:</span> {user.phone}</p>
                    <p><span>Fecha de nacimiento:</span> {user.birthDate}</p>
                    <p><span>Nombre de usuario:</span> {user.username}</p>
                    <p><span>Email:</span> {user.email}</p>
                    <p><span>Edad:</span> {user.age}</p>
                    <p><span>Altura:</span> {user.height} cm</p>
                    <p><span>Peso:</span> {user.weight} kg</p>
                    <p><span>Grupo sanguíneo:</span> {user.bloodGroup}</p>
                    <p><span>Color de ojos:</span> {user.eyeColor}</p>
                    <p><span>Color de cabello:</span> {user.hair.color}</p>
                    <p><span>Tipo de cabello:</span> {user.hair.type}</p>

                    <button className='btnAtras' onClick={()=>{navegate(-1)}}>Atras</button>
                </>
            }
        </div>
    )
}

export default UserDetail