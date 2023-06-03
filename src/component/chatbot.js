import React from 'react'
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider } from 'styled-components'

const chatbot = () => {
    const steps = [
        {
        id: 'hello-world',
        message: 'Hello World!',
        end: true,
        },
    ];

  return (

    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
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
