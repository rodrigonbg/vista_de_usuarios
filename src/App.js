import './App.css';
import NavBar from './components/navBar/NavBar';
import UserDetail from './pages/UserDetail/UserDetail';
import Users from './pages/Users/Users';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter className="App">

        <header>
          <NavBar />
        </header> 

        <main>
          <Routes> 
            <Route path='/' element={<h1>Home</h1>}/>
            <Route path='/Usuarios/:idP' element={<Users/>} />
            <Route path='/Usuarios/dtl/:id' element={<UserDetail />} />
            <Route path='/Sobre_Nosotros' element={<h1>sobre nosostros</h1>}/>
            <Route path='/Empresa' element={<h1>Empresa</h1>}/>
          </Routes>
        </main>

    </BrowserRouter>



  );
}

export default App;
