import React, {useState, useEffect, useContext } from 'react';
import { HomePage } from './components/HomePage'
import Myevents from './components/myevents'
import { Routes,Route} from 'react-router-dom'
import { Layout } from './components/Layout'
import { Events } from './components/Events'
import { EventPage } from './components/EventPage'
import { SpecificDay } from './components/SpecificDay'
import  Contactus from './components/Contactus'
import  Login  from './components/Login'
import  SignUp  from './components/SignUp'
import data from "./MOCK_DATA.json";
import users from "./UsersData.json";
import "./App.css"
import Payment from './components/Payment';
import { Context } from "./Context.jsx";

function App() {
  const [isLogIn, setIsLogIn] = useState(localStorage.getItem('loginData'));
  const [buyMe, setBuyMe] = useState({});
  const [selectedDate, setSelectedDate] = useState("");


  

  if(!localStorage.getItem("dataArr")){
    localStorage.setItem("dataArr",JSON.stringify(data.data));
  }
  
  if(!localStorage.getItem("usersArr")){
    localStorage.setItem("usersArr",JSON.stringify(users.users));
  }



  return (
    <>
     <div className='body'>
         
      <Routes>
        <Route path="/" element={<Layout isLogIn={isLogIn} setIsLogIn={setIsLogIn}/>}>
          <Route  path='/' element={<HomePage />}  />
          <Route path='/Events' element={<Events/>} />
          <Route path={`/Events/:id`} element={<EventPage buyMe={buyMe} setBuyMe={setBuyMe}/>}  />
          <Route path={`/Myevents`} element={<Myevents setSelectedDate={setSelectedDate} selectedDate={selectedDate} />}  />
          <Route path={`/Myevents/:date`} element={<SpecificDay setSelectedDate={setSelectedDate} selectedDate={selectedDate}/>}  />
          <Route path={`/Contactus`} element={<Contactus/>}  />
          <Route path={`/Specificday`} element={<SpecificDay/>}  />
          <Route path={`/Login`} element={<Login isLogIn={isLogIn} setIsLogIn={setIsLogIn}/>}  />
          <Route path={`/Signup`} element={<SignUp/>}  />
          <Route path={`/Payment`} element={<Payment buyMe={buyMe} setBuyMe={setBuyMe}/>}  />
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
