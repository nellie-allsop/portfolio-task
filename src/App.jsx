import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <header>
      <h1>Test title</h1>
      <Link to='/'>Home</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App