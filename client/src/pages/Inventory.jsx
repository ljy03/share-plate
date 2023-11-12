import React, { useContext, useEffect, useState } from "react";
import FoodCard from "./components/FoodCard";
import axios from "axios";
import { backendUrl } from "../App";
import { MyContextProvider } from "../App";

const Inventory = () => {

    const [foodItem, setFoodItem] = useState([]);
    const { user } = useContext(MyContextProvider);
    useEffect(() => {
        axios.get(`${backendUrl}/user/getInventory`, {
            headers: {
                email: user.email,
            }
        })
            .then((res) => {
                console.log(res);
                setFoodItem(res.data);
                res.data.map((item) => console.log(item.name))
            })
            .catch((err) => console.log(err));
    }, [])


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Inventory</h1>
            {/* <p onClick={generateRecipie}>generate</p> */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px', width: '80%', maxWidth: '800px' }}>
                {foodItem.length > 0 ?
                    (
                        foodItem.map((project, index) => (
                            <FoodCard key={`${index}`} index={project._id} {...project} />
                        ))
                    ) : (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <h1>No items in your inventory</h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Inventory;
