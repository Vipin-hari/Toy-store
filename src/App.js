import SignUp from './Components/SignUp'
import Home from './Components/Home';
import Navbar  from './Components/Navbar';
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from 'firebase/app';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Signin from './Components/Signin';
import Admin from './Components/Admin';
import Boys from './Components/Boys';
import Girls from './Components/Girls';
import { useState } from 'react';
import Footer from './Components/Footer';

const App = () => {
  initializeApp(firebaseConfig);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    
    setIsLoggedIn(false);
  };
  return (
    <div>
      <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
      <Routes>
        <Route path='/' element={<Signin setLoggedIn={setIsLoggedIn} onLogout={handleLogout}/>}/>
        <Route path='/login' element={<Signin setLoggedIn={setIsLoggedIn} onLogout={handleLogout}/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/admin' element={<Admin />}/>
        <Route path='/boys' element={<Boys />} />
        <Route path='/girls' element={<Girls />} ></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
