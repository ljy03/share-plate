import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import { useContext } from 'react';
import Navbar from './Navbar';

export const MyContextProvider = createContext();

export const backendUrl = "http://localhost:3001/api/user/create"

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <MyContextProvider.Provider value={{user, setUser}}>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </MyContextProvider.Provider>
    </>
  )
}

export default App
