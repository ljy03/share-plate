import React, { useEffect, useState } from "react";
import MarketCard from "./components/MarketCard";
import FoodCard from "./components/FoodCard";
import axios from "axios";
import { backendUrl } from "../App";

const Market = () => {
    
    // const mockFoodItems = [
    //     {
    //         index: 1,
    //         name: "Fresh Strawberries",
    //         description: "Organically grown strawberries from local farms.",
    //         image: "/src/assets/allec-gomes-xnRg3xDcNnE-unsplash.jpg", // Replace with an actual image path
    //         expiray_date:"04-17-2022",
    //         inital_amount: 1,
    //     },
    //     {
    //         index: 2,
    //         name: "Fresh Strawberries",
    //         description: "Organically grown strawberries from local farms.",
    //         image: "/src/assets/allec-gomes-xnRg3xDcNnE-unsplash.jpg", // Replace with an actual image path
    //         expiray_date:"04-17-2022",
    //         inital_amount: 1,
    //     },
    //     {
    //         index: 3,
    //         name: "Fresh Strawberries",
    //         description: "Organically grown strawberries from local farms.",
    //         image: "/src/assets/allec-gomes-xnRg3xDcNnE-unsplash.jpg", // Replace with an actual image path
    //         expiray_date:"04-17-2022",
    //         inital_amount: 1,
    //     },
    //     {
    //         index: 4,
    //         name: "Fresh Strawberries",
    //         description: "Organically grown strawberries from local farms.",
    //         image: "/src/assets/allec-gomes-xnRg3xDcNnE-unsplash.jpg", // Replace with an actual image path
    //         expiray_date:"04-17-2022",
    //         inital_amount: 1,
    //     },
    // ];

    const [mockFoodItems, setMockFoodItems] = useState([])

    useEffect(() => {
      axios.get(`${backendUrl}/user/getPublicInventory`)
      .then(res => {
        console.log(res.data)
        setMockFoodItems(res.data)
      })
    }, [])

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
