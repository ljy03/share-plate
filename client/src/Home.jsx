import React, { useState, useContext } from "react";
import { MyContextProvider } from "./App";

const Home = ({children }) => {
    const { count, setCount } = useContext(MyContextProvider);
    return (
        <div>
            <h1 className="bg-black">Home {count}</h1>
            <div className=' flex flex-wrap gap-7'>
                {children}
            </div>
        </div>
    );
}

export default Home;