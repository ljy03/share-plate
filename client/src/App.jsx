import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import List from './pages/List';

export const MyContextProvider = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyContextProvider.Provider value={{ count, setCount }}>
        <BrowserRouter>
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