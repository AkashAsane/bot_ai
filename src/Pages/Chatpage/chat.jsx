import React, { useState, useRef, useEffect } from "react";
import styles from "./chat.module.css";
import logo from "../../Assests/logo.png";
import Sidebar from "../../Components/Sidebar/sidebar";
import Button from "../../Components/Button/button";
import Chatresponse from "../Chatresponse/chatresponse";
import { response } from "../../response";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isAsked, setIsAsked] = useState(false);
  const [savedConversations, setSavedConversations] = useState([]);
  const [showRating, setShowRating] = useState({});
  const [feedbacks, setFeedbacks] = useState({});
  const [view, setView] = useState(false);
  const inputRef = useRef(null);

  // Load saved conversations from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("savedConversations");
    if (stored) {
      setSavedConversations(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage when updated
  useEffect(() => {
    localStorage.setItem("savedConversations", JSON.stringify(savedConversations));
  }, [savedConversations]);

  const handleMessage = () => {
    const responseFound = response.find(
      item => item.question.toLowerCase() === message.toLowerCase()
    );
    const botResponse = responseFound
      ? responseFound.response
      : "Sorry, Did not understand your query!";

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMessage = { text: message, time: currentTime, isBot: false };
    const newBotMessage = { text: botResponse, time: currentTime, isBot: true };

    setMessages([...messages, newMessage, newBotMessage]);
    setIsAsked(true);
    setMessage("");
    setView(false);
  };

  const handleSaveConversation = () => {
    const conversation = { messages, showRating, feedbacks };
    setSavedConversations([...savedConversations, conversation]);
    setMessages([]);
    setShowRating({});
    setFeedbacks({});
    setIsAsked(false);
    setView(false);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth" });
      inputRef.current.focus();
    }
  }, [messages]);

  const handlenewchat = () => {
    setMessages([]);
    setShowRating({});
    setFeedbacks({});
    setIsAsked(false);
    setMessage("");
    setView(false);
  };

  const handlePastConversationClick = (conversation) => {
    setMessages(conversation.messages);
    setShowRating(conversation.showRating);
    setFeedbacks(conversation.feedbacks);
    setIsAsked(true);
    setView(true);
  };

  return (
    <div className={styles.Mainwrapper}>
      <div className={styles.Sidebar}>
        <Sidebar
          onNewchat={handlenewchat}
          savedConversations={savedConversations}
          onPastConversationClick={handlePastConversationClick}
        />
      </div>

      <div className={styles.Chatbox}>
        <header>
          <h1>{view ? "Chat History" : "Bot AI"}</h1>
        </header>

        <div className={styles.response}>
          {isAsked && (
            <Chatresponse
              messages={messages}
              showRating={showRating}
              feedbacks={feedbacks}
              setShowRating={setShowRating}
              setFeedbacks={setFeedbacks}
            />
          )}
        </div>

        {!isAsked && (
          <div className={styles.container}>
            <div className={styles.title}>
              <p>How can I help you today?</p>
              <img src={logo} alt="Logo" />
            </div>

            <div className={styles.info}>
              <div className={styles.info1}>
                <h4>Hi, what is the weather?</h4>
                <p>Get immediate AI generated response</p>
              </div>
              <div className={styles.info1}>
                <h4>Hi, what is my location?</h4>
                <p>Get immediate AI generated response</p>
              </div>
              <div className={styles.info1}>
                <h4>Hi, what is the temperature?</h4>
                <p>Get immediate AI generated response</p>
              </div>
              <div className={styles.info1}>
                <h4>Hi, how are you?</h4>
                <p>Get immediate AI generated response</p>
              </div>
            </div>
          </div>
        )}

        <form className={styles.input} onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Message Bot AI..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            ref={inputRef}
          />
          <Button      type="submit"  style="input" onClick={handleMessage}>Ask</Button>
          <Button     type="button"   style="input" onClick={handleSaveConversation}>Save</Button>
        </form>
      </div>
    </div>
  );
}
