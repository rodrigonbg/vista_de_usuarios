import React, { useEffect, useState } from 'react'
import UsersTable from '../../components/userTable/usersTable'
import { getUsersByNameInPages } from '../../services/users';
import './User.css'

const Users = () => {

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cantUsers, setCantUsers] = useState(10);
  const [totalPages, setTotalPages] = useState(null);
  const [text, setText] = useState('');
  const [debounceText, setDebounceText] = useState('');

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebounceText(text);
      setCurrentPage(1);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [text]);


  useEffect(()=>{
    setLoading(true);

    const fetchUsers = async () => {
      const data = await getUsersByNameInPages(text, currentPage, cantUsers);
      setUsers(data.users);
      setTotalPages(Math.ceil(data.total / cantUsers))
      setLoading(false);

    }
    fetchUsers();
  },[currentPage, cantUsers, debounceText])


  return (
    <section className=''>
        <h1>Usuarios</h1>

        <input className="SearchBar" type="search"  name="buscador" placeholder="buscar" value={text} onChange={ (e) => {
          setText(e.target.value)
          setCurrentPage(1)
        }}/>
        
        <UsersTable users={users} loading={loading}/>

        <section className='footerUserTable'>
          
          <div className='pagination'>
            <button disabled={currentPage == 1} onClick={()=>{setCurrentPage(currentPage-1)}} > - </button>
            <span>{currentPage}</span>
            <button disabled={currentPage == totalPages} onClick={()=>{setCurrentPage(currentPage+1)}}>+</button>
            de {totalPages} páginas
          </div>
          
          <div className='cantPorPagina'>
            Mostrando 
            <input type="number" value={cantUsers} min={1} max={totalPages} onChange={(e)=>{
                if (e.target.value >=1 ){
                  setCantUsers(e.target.value)
                  setCurrentPage(1)
                }
            }}/>
            items por página
          </div>
        </section>

    </section>
  )
}

export default Users