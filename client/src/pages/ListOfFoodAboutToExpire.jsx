import React, { useContext, useEffect, useState } from "react";
import FoodCard from "./components/FoodCard";
import axios from "axios";
import { backendUrl } from "../App";
import { MyContextProvider } from "../App";

const FoodAboutToExpirePage = () => {

    const [foodItem, setFoodItem] = useState([]);
    const {user} = useContext(MyContextProvider);

    useEffect(() => {
        axios.get(`${backendUrl}/user/getInventoryFoodItemAboutToExpire`, {
            headers: {
                email: user.email,
            }
        })
            .then((res) => {
                console.log(res);
                setFoodItem(res.data);
            })
            .catch((err) => console.log(err));
    }, [])


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>List</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px', width: '80%', maxWidth: '800px' }}>
                {foodItem.map((project, index) => (
                    <FoodCard key={`${index}`} index={project._id} {...project} />
                ))}
            </div>
        </div>
    );
}

export default FoodAboutToExpirePage;
