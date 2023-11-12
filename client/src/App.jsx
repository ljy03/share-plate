import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import FoodCard from './pages/components/FoodCard'; // Update with the correct path to FoodCard

export const MyContextProvider = createContext();

function App() {
  const [count, setCount] = useState(0);

  // Mock data for FoodCard
  const mockFoodItems = [
    {
      index: 1,
      name: "Fresh Strawberries",
      description: "Organically grown strawberries from local farms.",
      tags: [{ name: "Organic", color: "bg-green-200" }, { name: "Fruit", color: "bg-red-200" }],
      image: "/src/assets/allec-gomes-xnRg3xDcNnE-unsplash.jpg", // Replace with an actual image path
    },
    {
      index: 2,
      name: "Fresh Strawberries",
      description: "Organically grown strawberries from local farms.",
      tags: [{ name: "Organic", color: "bg-green-200" }, { name: "Fruit", color: "bg-red-200" }],
      image: "/src/assets/allec-gomes-xnRg3xDcNnE-unsplash.jpg", // Replace with an actual image path
    },
  ];

  return (
    <>
      <MyContextProvider.Provider value={{ count, setCount }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <Home >
                {mockFoodItems.map(item => (
                  <FoodCard key={item.index} {...item} />
                ))}
              </Home>
            } />
          </Routes>
        </BrowserRouter>
      </MyContextProvider.Provider>
    </>
  );
}

export default App;