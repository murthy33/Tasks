import React from 'react'
import './App.css';
import "@fontsource/inter";
import Login from './Components/Login';
import Page2 from './Components/Page2';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/page2' element={<Page2/>}/>
      </Routes>
    </Router>
  )
}

export default App
