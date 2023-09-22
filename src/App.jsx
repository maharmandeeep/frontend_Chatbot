import { useState } from 'react'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import './App.css'
import Topbar from './topbar/Topbar'
import Profile from './profile/profile'
import Chatsystem from './chatbot/Chatbot'
import Intro from './Intro/Intro'

function App() {
  

  return (

    <>
    <Router>
    <Topbar></Topbar>
    
   
    <Routes>
    <Route path='/' element={<Intro/>}/>
    <Route path='/chat' element={<Chatsystem/>}/>
    <Route path='/profile' element={<Profile/>}/>

    </Routes>

    </Router>
     
    </>
  )
}

export default App


