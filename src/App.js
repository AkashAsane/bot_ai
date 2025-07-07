
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './Pages/Chatpage/chat'; 
import ChatHistoryPage from './Pages/ChatHistoryPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/history" element={<ChatHistoryPage />} />
      </Routes>
    </Router>
  );
}
