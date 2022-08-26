import React,{useEffect} from 'react';
import './App.css';
import { NavBar } from './components/Navbar';
import {Home} from "./pages/Home";
import { Schedule } from "../src/pages/Schedule";
import {useData} from "../src/utilities/firebase_config";
import {Login} from "./pages/Login";
import { ChatView } from './pages/ChatView';
import { ProtectedRoute } from './components/GuardedRoute';
import { Contact } from './pages/Contact';
//ReacRouter
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



const App =() =>{
  const [schedule, loading, error] = useData('/game'); 

  return(
    <div className="web">
      <NavBar/>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Schedule" element = {<Schedule/>}/>
        <Route path="/ChatView" element={<ProtectedRoute> <ChatView/> </ProtectedRoute>}>
        </Route>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default App;