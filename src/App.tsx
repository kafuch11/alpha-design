import './App.css'

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Background from './components/app/background';
import Navbar from './sections/Navbar';


function App() {

  return (
    <>
        <Background />
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
