import React from "react";
import FoodCard from "./components/FoodCard";

const List = () => {
    // Mock data for FoodCard
    const mockFoodItems = [
        {
            index: 1,
            name: "Fresh Strawberries",
            description: "Organically grown strawberries from local farms.",
            image: "/src/assets/allec-gomes-xnRg3xDcNnE-unsplash.jpg", // Replace with an actual image path
        },
        {
            index: 2,
            name: "Fresh Strawberries",
            description: "Organically grown strawberries from local farms.",
            image: "/src/assets/allec-gomes-xnRg3xDcNnE-unsplash.jpg", // Replace with an actual image path
        },
        {
            index: 3,
            name: "Fresh Strawberries",
            description: "Organically grown strawberries from local farms.",
            image: "/src/assets/allec-gomes-xnRg3xDcNnE-unsplash.jpg", // Replace with an actual image path
        },
        {
            index: 4,
            name: "Fresh Strawberries",
            description: "Organically grown strawberries from local farms.",
            image: "/src/assets/allec-gomes-xnRg3xDcNnE-unsplash.jpg", // Replace with an actual image path
        },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>List</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px', width: '80%', maxWidth: '800px' }}>
                {mockFoodItems.map((project, index) => (
                    <FoodCard key={`${index}`} index={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default List;
