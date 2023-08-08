import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route, Navigate,Outlet} from 'react-router-dom'
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Login from './Pages/authenticate/Login';
import SignUp from './Pages/authenticate/SignUp';
import Rooms from './Pages/rooms/Rooms';
import Otp from './Pages/Otp';
import Profile from './Pages/Profile';

const isAuth = false;

const ProtectedRoute = () => {
  return (
    !isAuth ? <Navigate to='/'/> : <Outlet/>
  )
};


const App = () => {
  return (
    <BrowserRouter>
      <NavBar check={isAuth}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/authenticate' element={<Auth/>}/>
        <Route path='/authenticate/login' element={<Login/>}/>
        <Route path='/authenticate/signUp' element={<SignUp/>}/>
        <Route path='/authenticate/otp' element={<Otp/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/rooms' element={<Rooms/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App