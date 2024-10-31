import './App.css';
import React from 'react';
import { ChatButton } from './Components/ChatButton';
import { ChatWindow } from './Components/ChatWindow';
import { MessageList } from './Components/MessageList';
import { ChatCreateMessage } from './Components/ChatCreateMessage';
import { MessageItem } from './Components/MessageItem';

function App() {
  const [activeChat, setActiveChat] = React.useState(true);
  const [messagesChat, setMessagesChat] = React.useState([{
    message: 'Hola soy un bot de platzi',
    date:  '',
    type: 'left',
  }]);

  return (
    <>
      {activeChat &&
        (<ChatWindow>
          <div className="top_menu">
            <div className="title">ChatBot - Platzi</div>
          </div>

          <MessageList>
            {messagesChat.map((messageItem, index) => (
              <MessageItem
                key={index}
                message={messageItem.message}
                date={messageItem.date}
                type={messageItem.type}
              />
            ))}
          </MessageList>

          <ChatCreateMessage
            messagesChat={messagesChat}
            setMessagesChat={setMessagesChat}
          />

        </ChatWindow>)
      }
      <ChatButton
        setActiveChat={setActiveChat}
      />
    </>
  );
}

export default App;
