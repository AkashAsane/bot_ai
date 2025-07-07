import React, { useEffect, useState } from "react";
import Chatresponse from "./Chatresponse/chatresponse"; 

export default function ChatHistoryPage() {
  const [savedConversations, setSavedConversations] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("conversations");
    if (data) {
      setSavedConversations(JSON.parse(data));
    }
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Past Conversations</h1>
      {savedConversations.length === 0 ? (
        <p>No past conversations found.</p>
      ) : (
        savedConversations.map((conv, idx) => (
          <div key={idx} style={{ marginBottom: "2rem", border: "1px solid #ccc", padding: "1rem" }}>
            <h3>Conversation {idx + 1}</h3>
            <Chatresponse
              messages={conv.messages}
              showRating={conv.showRating}
              feedbacks={conv.feedbacks}
              setShowRating={() => {}}
              setFeedbacks={() => {}}
            />
          </div>
        ))
      )}
    </div>
  );
}
