import React from 'react'
import Counter from './Counter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navigation from './navigate/Navigation';
import About from './About';
import Contact from './Contact';
const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/counter' element={<Counter/>} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App;