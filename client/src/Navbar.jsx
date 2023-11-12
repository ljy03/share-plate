import React, { useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";
import "./Navbar.css"
import { MyContextProvider } from "./App";
import axios from "axios";
import { backendUrl } from "./App";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(MyContextProvider)
    const handleAuth = async () => {
        try {
            const data = await signInWithPopup(auth, provider);
            const idToken = await data.user.getIdToken();
            localStorage.setItem("token", idToken);
            console.log(data.user);
            setUser(data.user);
            await axios.post(`${backendUrl}/user/create`, {
                name: data.user.displayName,
                email: data.user.email,
                photo: data.user.photoURL,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (users) => {
            if (users) {
                console.log(users);
                setUser(users);
            } else {
                console.log("no user");
            }
        });
        return () => unsubscribe();
    }, [])

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem("token");
                setUser(null);
            })
            .catch((err) => console.log(err));
    }

    const navigateToInventory = () => {
        navigate("/Inventory");
    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <ul style={{ display: "flex" }}>
                <li onClick={() => {
                    navigate("/");
                }}>Home</li>
                {user && (
                    <ul style={{ display: "flex" }}>
                        <li onClick={navigateToInventory}>Inventory</li>
                        <li>Add Item</li>
                        <li>Chat</li>
                        <li onClick={() => {
                            navigate("/Marketplace");
                        }}>MarketPlace</li>
                    </ul>
                )}
            </ul>
            <ul>
                {user ? (
                    <ul style={{display: "flex"}}>
                        <li style={{display: "flex", alignItems: "center"}}><img style={{height:"30px", borderRadius: "50%", alignItems: "center"}} src={user.photoURL} /></li>
                        <li style={{display: "flex", alignItems: "center"}} onClick={handleLogout}>Logout</li>
                    </ul>
                ) : (
                    <li onClick={handleAuth}>Login</li>
                )}
            </ul>
        </div>
    );
}

export default Navbar;