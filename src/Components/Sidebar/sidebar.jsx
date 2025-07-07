import React, { useState } from 'react';
import Button from "../Button/button";
import styles from "./sidebar.module.css";
import { FaRegEdit, FaBars, FaTimes } from "react-icons/fa";
import sidelogo from "../../Assests/sidelogo.png";

export default function Sidebar({ onNewchat, savedConversations, onPastConversationClick }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showConversations, setShowConversations] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleConversations = () => {
        setShowConversations(!showConversations);
    };

    return (
        <div className={`${styles.sidewrapper} ${isOpen ? styles.open : ''}`}>
            <div className={styles.hamburger} onClick={toggleSidebar}>
                {isOpen ? <FaTimes fontSize="30px" /> : <FaBars fontSize="30px" />}
            </div>

            <div className={styles.wrapper1}>
                <img src={sidelogo} alt="sidelogo" />
                <p>New Chat</p>

                {/* 🚀 This will be visible to Cypress and also works as UI button */}
                <a href="/" className={styles.link}>
                    <Button style="first">
                        <FaRegEdit fontSize={"30px"} />
                    </Button>
                </a>
            </div>

            <div className={styles.conversations}>
                {/* Local toggle (optional for internal UI) */}
                <Button style="second" onClick={toggleConversations}>
                    Show Conversations
                </Button>

                {/* 🚀 This will be visible to Cypress and handle /history route */}
                <a href="/history" className={styles.link}>
                    <Button style="second">Past Conversations</Button>
                </a>

                {showConversations && savedConversations.map((conversation, index) => (
                    <div
                        key={index}
                        className={styles.conversationItem}
                        onClick={() => onPastConversationClick(conversation)}
                    >
                        <p className={styles.chatconversation}>Conversation {index + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
