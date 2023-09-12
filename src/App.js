
import './App.css';
import { Link, Route, Routes, Navigate } from "react-router-dom";
// import Home from './components/Home';
import Cat from './components/Cat';
import TheCat from './components/TheCat';
import Game from './components/Game';
import PC from './components/Pc';
import PS from './components/PS';
import XBOX from './components/Xbox';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import MainPage from './pages/mainPage/mainPage';
function App() {
  const [toggle, setToggle] = useState(true);
  // const navigate = useNavigate()

  // const handleNav = (type,state) => {
  //   navigate(`/consoles/${type}` , {state})
  // }

  
  return (
    <div className='App' >
      <nav style={{ display: 'flex', padding: '2rem 3rem', alignItems: 'center', justifyContent: 'space-between' }}>
        
        <h1 style={{ color: '#ffffff' }}>Games List</h1>
        <div>
          <button className='navButton' onClick={() => setToggle(!toggle)}><HiMenu /></button>
          <ul toggle className={toggle ? 'navMenu' : 'navMenuShow'}>
            <li><Link style={{ textDecoration: 'none', fontSize: '20px', color: '#ffffff', cursor:'pointer' }} to="/">Home</Link></li>
            <li><Link style={{ textDecoration: 'none', fontSize: '20px', color: '#ffffff', cursor:'pointer' }} to="/cat">Categories</Link></li>
            <li><Link style={{ textDecoration: 'none', fontSize: '20px', color: '#ffffff', cursor:'pointer' }} to="/pc">PC</Link></li>
            <li><Link style={{ textDecoration: 'none', fontSize: '20px', color: '#ffffff', cursor:'pointer' }} to="/ps">PS</Link></li>
            <li><Link style={{ textDecoration: 'none', fontSize: '20px', color: '#ffffff', cursor:'pointer' }} to="/xbox">XBOX</Link></li>
            {/* <li><span style={{ textDecoration: 'none', fontSize: '20px', color: '#ffffff', cursor:'pointer' }} onClick={()=>handleNav("pc",1)}>PC</span></li>
            <li><span style={{ textDecoration: 'none', fontSize: '20px', color: '#ffffff', cursor:'pointer' }} onClick={()=>handleNav("ps",2)}>PS</span></li>
            <li><span style={{ textDecoration: 'none', fontSize: '20px', color: '#ffffff', cursor:'pointer' }} onClick={()=>handleNav("xbox",3)}>Xbox</span></li> */}
          </ul>
        </div>
      </nav>
      
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<MainPage />} />
        <Route exact path='/' element={<MainPage />} />

        <Route path='/cat' element={<Cat />} />
        <Route path='/pc' element={<PC />} />
        <Route path='/ps' element={<PS />} />
        <Route path='/xbox' element={<XBOX />} />
        <Route path='/thecat/:id' element={<TheCat />} />
        <Route path='/game/:id' element={<Game />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
