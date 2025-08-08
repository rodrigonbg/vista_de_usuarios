import { NavLink, Link } from 'react-router-dom'
import logo from '../../logo.svg';
import './NavBar.css'


const NavBar = () => {
    
    return(

            <section className="navbarContainer">

                <Link to='/'>
                    <img className="App-logo" src={logo} alt="React" />
                </Link>

                <span className="navbarLinks">
                        <div>
                            <NavLink key={'Home'} to={'/'} className={({isActive})=> `navbar_item ${isActive ? "selected" : ""}` }> {'Home'} </NavLink>
                        </div>    
                        <div>
                            <NavLink key={'Usuarios'} to={'/Usuarios'} className={({isActive})=> `navbar_item ${isActive ? "selected" : ""}` }> {'Usuarios'} </NavLink>
                        </div>    
                        <div>
                            <NavLink key={'Sobre Nosotros'} to={'/Sobre_Nosotros'} className={({isActive})=> `navbar_item ${isActive ? "selected" : ""}` }> {'Sobre Nosotros'} </NavLink>
                        </div>   
                        <div>
                            <NavLink key={'Empresa'} to={'/Empresa'} className={({isActive})=> `navbar_item ${isActive ? "selected" : ""}` }> {'Empresa'} </NavLink>
                        </div>   
                </span>
            </section> 
    )
}
export default NavBar