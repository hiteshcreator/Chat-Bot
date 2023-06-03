import React from 'react'
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider } from 'styled-components'
import Review from './review';
import RefreshIcon from '@mui/icons-material/Refresh';

const chatbot = () => {
  const refresh = () => window.location.reload(true)

  const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}! What is your gender?',
      trigger: 'gender',
    },
    {
      id: 'gender',
      options: [
        { value: 'male', label: 'Male', trigger: '5' },
        { value: 'female', label: 'Female', trigger: '5' },
      ],
    },
    {
      id: '5',
      message: 'How old are you?',
      trigger: 'age',
    },
    {
      id: 'age',
      user: true,
      trigger: '7',
      validator: (value) => {
        if (isNaN(value)) {
          return 'value must be a number';
        } else if (value < 0) {
          return 'value must be positive';
        } else if (value > 120) {
          return `${value}? Come on!`;
        }

        return true;
      },
    },
    {
      id: '7',
      message: 'Great! Check out your summary',
      trigger: 'review',
    },
    {
      id:'review',
      component: <Review />,
      asMessage: true,
      trigger: 'next',
    },
    {
      id:"next",
      message:"Thanks you for using chat-bot!",
      trigger:"refresh"
    },
    {
      id: 'refresh',
      options: [
        { value: 'male', label: <><RefreshIcon  onClick={refresh} /></>},
      ],
      end:true
    }

  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} headerTitle="Chat Bot" />
    </ThemeProvider>
  );
}

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#2196f3',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#e3f2fd',
    botFontColor: '#004d40',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

export default chatbot