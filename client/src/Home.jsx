import React, { useState, useContext } from "react";
import { MyContextProvider } from "./App";
import Navbar from "./Navbar";

const Home = () => {
    const { count, setCount } = useContext(MyContextProvider);
    return (
        <div>
        </div>
    );
}

export default Home;