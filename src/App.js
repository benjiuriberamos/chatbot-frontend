import './App.css';
import { ChatButton } from './Components/ChatButton';
import { ChatWindow } from './Components/ChatWindow';
import { ChatCreateMessage } from './Components/ChatCreateMessage';
import React from 'react';

function App() {
  const [activeChat, setActiveChat] = React.useState(false);

  return (
    <>
      {activeChat &&
        (<ChatWindow>
          <div className="top_menu">
            <div className="title">ChatBot - Platzi</div>
          </div>
            
          <ChatCreateMessage/>
        </ChatWindow>)
      }
      <ChatButton
        setActiveChat={setActiveChat}
      />
    </>
  );
}

export default App;
