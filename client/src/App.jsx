import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import { useContext } from 'react';

export const MyContextProvider = createContext();

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <MyContextProvider.Provider value={{count, setCount}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </MyContextProvider.Provider>
    </>
  )
}

export default App
