// src/types/index.ts
export interface Message {
    role: 'user' | 'assistant';
    content: string;
    timestamp?: Date;
  }
  
  export interface User {
    email: string;
    name: string;
  }
  
  // src/data/dummy.ts
  export const dummyCredentials = {
    email: 'test@example.com',
    password: 'password123'
  };
  
  export const dummyChats = [
    {
      id: 1,
      title: 'Previous Chat 1',
      messages: [
        {
          role: 'user',
          content: 'Hello, how can you help me today?',
          timestamp: new Date('2024-02-19T10:00:00')
        },
        {
          role: 'assistant',
          content: 'Hi! I\'m here to help you with any questions or tasks you have. What would you like to know?',
          timestamp: new Date('2024-02-19T10:00:05')
        }
      ]
    },
    {
      id: 2,
      title: 'Previous Chat 2',
      messages: [
        {
          role: 'user',
          content: 'Can you explain how to use React hooks?',
          timestamp: new Date('2024-02-18T15:30:00')
        },
        {
          role: 'assistant',
          content: 'React hooks are functions that allow you to use state and other React features in functional components...',
          timestamp: new Date('2024-02-18T15:30:10')
        }
      ]
    }
  ];