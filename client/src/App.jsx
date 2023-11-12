import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Inventory from './pages/Inventory';
import Market from './pages/Market';
import Navbar from './Navbar';

export const MyContextProvider = createContext();

export const backendUrl = "http://localhost:3001/api"

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <MyContextProvider.Provider value={{user, setUser}}>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path= "/Inventory" element={<Inventory />} />
            <Route path= "/Marketplace" element={<Market />} />
          </Routes>
        </BrowserRouter>
      </MyContextProvider.Provider>
    </>
  );
}

export default App;