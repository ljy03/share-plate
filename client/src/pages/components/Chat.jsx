import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContextProvider } from "../../App";
import axios from "axios";
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const messageCollection = collection(db, "messages");

const ChatScreeen = () => {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(MyContextProvider);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "messages"),
            (querySnapshot) => {
                const messages = [];
                querySnapshot.forEach((doc) => {
                    const messageData = doc.data();
                    if (messageData.room === id) {
                        messages.push({ id: doc.id, ...messageData });
                    }
                });
                const sortedMessages = messages.sort((a, b) => (a.createdAt?.seconds || 0) - b.createdAt?.seconds || 0)
                setMessageList(sortedMessages);
            }
        );
        return () => unsubscribe();
    }, [id]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!message.trim()) {
            return;
        }
        const messageData = {
            room: id,
            message,
            username: user.email,
            createdAt: serverTimestamp(),
        };

        try {
            await addDoc(messageCollection, messageData);
            setMessage("");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div style={{height: "90vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <form style={{padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)"}} onSubmit={handleSubmit}>
                <div style={{justifyContent: "start", padding: "10px", marginBottom: "10px", alignItems: "start", width: "90vw", height: "65vh", overflow: "auto", borderRadius: "10px"}}>
                    {messageList.map((msg) => (
                        <p key={msg.id} style={{textAlign: user.email === msg.email ? "right" : "left", marginTop: "8px"}}>
                            <span>
                                {msg.email}
                            </span>
                        </p>
                    ))}
                </div>
                <div style={{display: "flex", columnGap: "4px"}}>
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message..." />
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default ChatScreeen;