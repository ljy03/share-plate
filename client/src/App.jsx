import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
<<<<<<< HEAD
import { useContext } from 'react';
import Navbar from './Navbar';
=======
import List from './pages/List';
>>>>>>> toby

export const MyContextProvider = createContext();

export const backendUrl = "http://localhost:3001/api"

function App() {
<<<<<<< HEAD
  const [user, setUser] = useState(null);

  return (
    <>
      <MyContextProvider.Provider value={{user, setUser}}>
=======
  const [count, setCount] = useState(0);

  return (
    <>
      <MyContextProvider.Provider value={{ count, setCount }}>
>>>>>>> toby
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path= "/List" element={<List />} />
          </Routes>
        </BrowserRouter>
      </MyContextProvider.Provider>
    </>
  );
}

export default App;