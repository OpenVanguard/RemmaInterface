import React, { useState, useEffect } from 'react';
import { Send, User, Bot, Moon, Sun, Menu } from 'lucide-react';
import styles from './ChatInterface.module.css';

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversations, setConversations] = useState<{ id: string; title: string; timestamp: string }[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
    // In your JSX, apply the dark class conditionally:
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Theme handling
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  // Google Auth
  const signInWithGoogle = async () => {
    // Replace with your Google Auth implementation
    console.log('Implement Google Sign In');
  };

  const signOut = async () => {
    setUser(null);
    // Implement sign out logic
  };

  // Conversation handling
  const createNewConversation = () => {
    const newConversation = {
      id: Date.now().toString(),
      title: 'New Chat',
      timestamp: new Date().toISOString(),
    };
    setConversations([newConversation, ...conversations]);
    setCurrentConversationId(newConversation.id);
    setMessages([]);
  };

interface Conversation {
    id: string;
    title: string;
    timestamp: string;
}

const selectConversation = (conversationId: string) => {
    setCurrentConversationId(conversationId);
    // Load conversation messages from your backend
    setMessages([]); // Replace with actual message loading
};

interface UserMessage {
    role: 'user';
    content: string;
    timestamp: string;
}

interface AIMessage {
    role: 'assistant';
    content: string;
    timestamp: string;
}

type Message = UserMessage | AIMessage;

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: UserMessage = {
        role: 'user',
        content: inputMessage,
        timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response - replace with actual backend call
    setTimeout(() => {
        const aiMessage: AIMessage = {
            role: 'assistant',
            content: 'This is a placeholder response. Connect your backend API here.',
            timestamp: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
    }, 1000);
};

  const MessageBubble = ({ message }: { message: Message }) => {
    const isUser = message.role === 'user';
    return (
      <div className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
        <div className={`flex items-start max-w-3xl ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className={`flex items-center justify-center h-8 w-8 rounded-full ${isUser ? 'bg-blue-500 ml-2' : 'bg-gray-500 mr-2'}`}>
            {isUser ? <User className="h-5 w-5 text-white" /> : <Bot className="h-5 w-5 text-white" />}
          </div>
          <div className={`px-4 py-2 rounded-lg ${
            isUser 
              ? 'bg-blue-500 text-white dark:bg-blue-600' 
              : 'bg-gray-100 dark:bg-gray-700 dark:text-white'
          }`}>
            <p className="text-sm">{message.content}</p>
            <span className="text-xs opacity-50 mt-1 block">{message.timestamp}</span>
          </div>
        </div>
      </div>
    );
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">Welcome to AI Chat</h1>
          <button
            onClick={signInWithGoogle}
            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <img src="/api/placeholder/20/20" alt="Google" className="mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : ''}`}>
      {/* Rest of your component */}
  <div className="p-4">
        <button
          onClick={createNewConversation}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          New Chat
        </button>
        
        <div className="mt-4 space-y-2">
          {conversations.map(conv => (
            <button
              key={conv.id}
              onClick={() => selectConversation(conv.id)}
              className={`w-full p-2 text-left rounded-lg ${
                currentConversationId === conv.id
                  ? 'bg-blue-100 dark:bg-blue-900'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              } dark:text-white`}
            >
              {conv.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg mr-2"
              title="Toggle Sidebar"
            >
              <Menu className="h-5 w-5 dark:text-white" />
            </button>
            <h1 className="text-xl font-semibold dark:text-white">AI Chat Assistant</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              title="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 dark:text-white" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={signOut}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-gray-900">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
              <Bot className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg">Start a conversation!</p>
              <p className="text-sm">Ask me anything...</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <MessageBubble key={index} message={message} />
            ))
          )}
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <div className={`w-2 h-2 bg-current rounded-full animate-bounce ${styles['bounce-delay-2']}`} />
              <div className={`w-2 h-2 bg-current rounded-full animate-bounce ${styles['bounce-delay-4']}`} />
              <div className={`w-2 h-2 bg-current rounded-full animate-bounce ${styles['bounce-delay-6']}`} />
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="border-t dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
          <div className="flex space-x-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Send Message"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;