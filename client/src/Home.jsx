import React, { useState, useContext } from "react";
import { MyContextProvider } from "./App";

const Home = () => {
    const { count, setCount } = useContext(MyContextProvider);
    return (
        <div>
            <h2 onClick={() => setCount(count + 1)}>Yooo</h2>
            <h1 className="bg-black">Home {count}</h1>
        </div>
    );
}

export default Home;