import React, { useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";
import "./Navbar.css"
import { MyContextProvider } from "./App";

const Navbar = () => {
    const { user, setUser } = useContext(MyContextProvider)
    const handleAuth = async () => {
        try {
            const data = await signInWithPopup(auth, provider);
            const idToken = await data.user.getIdToken();
            localStorage.setItem("token", idToken);
            console.log(data.user);
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
            })
            .catch((err) => console.log(err));
    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <ul style={{ display: "flex" }}>
                <li>Home</li>
                {user && (
                    <ul style={{display: "flex"}}>
                    <li>Inventory</li>
                    <li>Add Item</li>
                    <li>Chat</li>
                    </ul>
                )}
            </ul>
            <ul>
                {user ? (
                    <li onClick={handleLogout}>Logout</li>
                ) : (
                    <li onClick={handleAuth}>Login</li>
                )}

            </ul>
        </div>
    );
}

export default Navbar;