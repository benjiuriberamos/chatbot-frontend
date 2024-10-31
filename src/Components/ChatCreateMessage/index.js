
import React from 'react';
import { ReactComponent as SendSVG } from './send.svg';
import './ChatCreateMessage.css';



function ChatCreateMessage({messagesChat, setMessagesChat}) {
  const [textQuery, setTextQuery] = React.useState('');
  const [disableSend, setDisableSend] = React.useState(false);

  const ENDPOINT = "http://localhost:8000/api/chatbot";
  const TOKEN = "2|q2iqTWr4LzWDQwRF5T8qH4vX0IUU23ElyubrDKRh6cb66110";

  React.useEffect(() => {
    console.log('hola')
    if (textQuery) {
      const response = fetch(ENDPOINT, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: textQuery})
      })
      .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json(); // Convierte la respuesta a JSON
      })
      .then(data => {
          // Accede a los valores del JSON
          console.log(data)
          addMessage(data.message, 'left')
          endScroll()
      })
      .catch(error => {
          console.error("Error en la solicitud:", error);
      });
    }
    

  }, [textQuery]);

  const addMessage = (text, type) => {
    const newMessageChat = [...messagesChat];
    const newMessage = {
      message: text,
      date:  '',
      type: type,
    };
    newMessageChat.push(newMessage);
    setMessagesChat(newMessageChat);
    endScroll()
  }

  const endScroll = () => {
    setTimeout(() => {
      let contentMessages = document.querySelector('.messages');
      contentMessages.scrollTop = contentMessages.scrollHeight;
    }, 100)
  }

  return (
      <div className="bottom_wrapper">
        <input 
          id="msg_input"
          placeholder="Say Hi to begin chat..." 
        />
        <div id="send_button" className="app_button_1" 
          disabled={disableSend}
          onClick={(event) => {
            setDisableSend(state => !state)
            let inputTextQuery = document.getElementById('msg_input');

            if(inputTextQuery.value) {
              setTextQuery(inputTextQuery.value)
              addMessage(inputTextQuery.value, 'right')
              inputTextQuery.value = ''
              endScroll()
            }
          }}
        >
          <SendSVG className="Icon-svg" width="20px" height="20px"/>
        </div>
      </div>
  );
}

export { ChatCreateMessage };