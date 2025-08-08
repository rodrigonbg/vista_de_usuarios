import './App.css';
import NavBar from './components/navBar/NavBar';
import Users from './pages/Users/Users';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter className="App">

        <header>
          <NavBar />
        </header> 

        <main>
          <Routes> 
            <Route path='/' />
            <Route path='/Usuarios' element={<Users/>} />
            <Route path='/Sobre_Nosotros' />
            <Route path='/Empresa' />
          </Routes>
        </main>

    </BrowserRouter>



  );
}

export default App;
