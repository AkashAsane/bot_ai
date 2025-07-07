import React, { useState } from "react";
import styles from "./chatresponse.module.css";
import userlogo from "../../Assests/userlogo.png";
import logo from "../../Assests/logo.png";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";
import Basic from "../../Components/UserRating/userrating";
import Button from "../../Components/Button/button";
import Feedback from "../../Components/Feedback/feedback";


export default function Chatresponse({ messages, showRating, feedbacks, setShowRating, setFeedbacks }) {
  const [openFeedback, setOpenFeedback] = useState(false);
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(null);

  const handleThumbsUpClick = (index) => {
    setShowRating((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleFeedback = (feedbackText) => {
    setFeedbacks((prev) => ({ ...prev, [currentFeedbackIndex]: feedbackText }));
    setOpenFeedback(false);
  };

  const openFeedbackForm = (index) => {
    setCurrentFeedbackIndex(index);
    setOpenFeedback(true);
  };

  return (
    <div className={styles.response}>
      {openFeedback && (
        <Feedback closefeedback={setOpenFeedback} onSubmit={handleFeedback} />
      )}
      {messages.map((message, index) => (
        <div key={index} className={styles.message}>
          {message.isBot ? (
            <div className={styles.botresponse}>
              <img src={logo} alt="Soul AI Logo" className={styles.botlogo} />
              <div className={styles.botinfo}>
                <span>Soul AI</span>
                <p>{message.text}</p>
                <div className={styles.feedback}>
                  <span className={styles.time}>{message.time}</span>
                  <Button style="ratingbtn" onClick={() => handleThumbsUpClick(index)}>
                    <GoThumbsup />
                  </Button>
                  <Button style="ratingbtn" onClick={() => openFeedbackForm(index)}>
                    <GoThumbsdown />
                  </Button>
                </div>
                {showRating[index] && (
                  <div className={styles.ratingdiv}>
                    <span>Rate this response</span>
                    <Basic />
                  </div>
                )}
                {feedbacks[index] && (
                  <div className={styles.feedback}>
                    <span>Feedback: <span>{feedbacks[index]}</span></span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.usermessage}>
              <img src={userlogo} alt="User" className={styles.userlogo} />
              <div className={styles.userinfo}>
                <p>You</p>
                <p>{message.text}</p>
                <span className={styles.time}>{message.time}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
