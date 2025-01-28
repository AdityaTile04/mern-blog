import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    // Add user message to conversation
    setConversation((prev) => [...prev, { sender: "user", text: message }]);

    try {
      // Call backend API
      const response = await axios.post("/api/chatbot/chat", { message });
      const botReply = response.data.reply;

      // Add bot reply to conversation
      setConversation((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setConversation((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong!" },
      ]);
    }

    // Clear input
    setMessage("");
  };

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.conversation}>
        {conversation.map((msg, index) => (
          <div
            key={index}
            style={
              msg.sender === "user" ? styles.userMessage : styles.botMessage
            }
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  chatbotContainer: {
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#f9f9f9",
  },
  conversation: {
    height: "200px",
    overflowY: "auto",
    marginBottom: "10px",
  },
  userMessage: {
    textAlign: "right",
    color: "blue",
    margin: "5px 0",
  },
  botMessage: {
    textAlign: "left",
    color: "green",
    margin: "5px 0",
  },
  inputContainer: {
    display: "flex",
  },
  input: {
    flex: 1,
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    marginLeft: "10px",
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Chatbot;
