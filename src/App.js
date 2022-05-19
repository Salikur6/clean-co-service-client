import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Services from './pages/Services';
import Navbar from './shared/Navbar';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>





      </Navbar>

    </div>
  );
}

export default App;