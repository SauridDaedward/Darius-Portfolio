import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Ensure the correct path for your CSS

const ChatbotComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    // Add user's message to the chat
    setMessages([...messages, { sender: 'User', text: input }]);
    
    // Clear the input field
    setInput('');

    // Call the OpenAI API and get the chatbot's response
    setLoading(true);
    const chatbotResponse = await fetchAIResponse(input);
    setLoading(false);

    // Add the chatbot's response to the chat
    setMessages(prevMessages => [
      ...prevMessages,
      { sender: 'Chatbot', text: chatbotResponse }
    ]);
  };

  const fetchAIResponse = async (userMessage) => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY; // Use Vite's environment variable system
    const apiEndpoint = 'https://api.openai.com/v1/chat/completions';

    try {
      const response = await axios.post(
        apiEndpoint,
        {
          model: "gpt-4", // Use "gpt-4" for GPT-4 model
          messages: [{ role: 'user', content: userMessage }],
          max_tokens: 150,
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error fetching AI response:', error);
      return "I'm sorry, there was an error processing your request.";
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <strong>{message.sender}: </strong>{message.text}
            </div>
          ))}
        </div>
        {loading && <div className="loading">Chatbot is thinking...</div>}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotComponent;
