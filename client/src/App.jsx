import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Inventory from './pages/Inventory';
import Market from './pages/Market';
import Navbar from './Navbar';
import FoodAboutToExpirePage from './pages/ListOfFoodAboutToExpire';
import ChatScreeen from './pages/components/Chat';

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
            {/* <Route path= "/List" element={user ? <List /> : <Home />} /> */}
            <Route path='/expire' element={user ? <FoodAboutToExpirePage /> : <Home />} />
            <Route path= "/Inventory" element={<Inventory />} />
            <Route path= "/Marketplace" element={<Market />} />
            <Route path='/Marketplace/chat/:id' element={<ChatScreeen />} />
          </Routes>
        </BrowserRouter>
      </MyContextProvider.Provider>
    </>
  );
}

export default App;