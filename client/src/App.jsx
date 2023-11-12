import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import List from './pages/List';
import Navbar from './Navbar';
import FoodAboutToExpirePage from './pages/ListOfFoodAboutToExpire';

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
            <Route path= "/List" element={user ? <List /> : <Home />} />
            <Route path='/expire' element={user ? <FoodAboutToExpirePage /> : <Home />} />
          </Routes>
        </BrowserRouter>
      </MyContextProvider.Provider>
    </>
  );
}

export default App;