import React from "react";
import MarketCard from "./components/MarketCard";
import Sidebar from "./components/Sidebar"
import FoodCard from "./components/FoodCard";

const Market = () => {
    
    const mockFoodItems = [
        {
            index: 1,
            name: "Fresh Strawberries",
            description: "Organically grown strawberries from local farms.",
            image: "/src/assets/allec-gomes-xnRg3xDcNnE-unsplash.jpg", // Replace with an actual image path
            expiray_date:"04-17-2022",
            inital_amount: 1,
        },
        {
            index: 2,
            name: "Fresh Strawberries",
            description: "Organically grown strawberries from local farms.",
            image: "/src/assets/allec-gomes-xnRg3xDcNnE-unsplash.jpg", // Replace with an actual image path
            expiray_date:"04-17-2022",
            inital_amount: 1,
        },
        {
            index: 3,
            name: "Fresh Strawberries",
            description: "Organically grown strawberries from local farms.",
            image: "/src/assets/allec-gomes-xnRg3xDcNnE-unsplash.jpg", // Replace with an actual image path
            expiray_date:"04-17-2022",
            inital_amount: 1,
        },
        {
            index: 4,
            name: "Fresh Strawberries",
            description: "Organically grown strawberries from local farms.",
            image: "/src/assets/allec-gomes-xnRg3xDcNnE-unsplash.jpg", // Replace with an actual image path
            expiray_date:"04-17-2022",
            inital_amount: 1,
        },
    ];

    return (
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ marginLeft: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Market</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px', width: '80%', maxWidth: '800px' }}>
              {mockFoodItems.map((project, index) => (
                <FoodCard key={`${index}`} index={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      );
    };

export default Market;
