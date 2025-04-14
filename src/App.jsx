import React from 'react'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/more-info' element={<AboutMe />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  } 
