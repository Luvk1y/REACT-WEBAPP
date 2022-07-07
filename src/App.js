import React,{useEffect} from 'react';
import './App.css';
import { MainTitle, UpcomingEventsTitle, UpcomingEvents, RenderingUpcomingEvents } from './components/MainTitle';
import { NavBar } from './components/Navbar';
import {DynamicTable} from "./shared/Table/Table";
import axios from "axios";
import data from "./utilities/games.json";
import septemberGames from "./utilities/september";

import {Home} from "./pages/Home";
import { Schedule } from "../src/pages/Schedule";
import { Contact } from "../src/pages/Contact";
//ReacRouter
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App =() =>{
  console.log(window.location.pathname);
  //useffect
 /*console.log(septemberGames);
  useEffect(() => {
    axios
      .get(data)
      .then(response => {
        console.log(response.data,'ciao');
      });
  }, []);*/
  return(
    <div className="web">
      <NavBar/>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Schedule" element = {<Schedule/>}/>
        <Route path="/Contact" element = {<Contact/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default App;