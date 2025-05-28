import dayjs from 'dayjs';

import   { useState } from 'react'
import {Chatbot} from 'supersimpledev';
import './ChatInput.css';


export function ChatInput({chatMessages,setChatMessages}) {
        const [inputText , setInputText] = useState('');
        const [isLoading , setLoading] = useState(false);

        function saveInputText(event){
           setInputText(event.target.value);
           
        }

        async function sendMessage(){

          if(isLoading || inputText === ''){
            return;
          }

          setLoading(true);

          setInputText('');
        const newChatMessages = [
        ...chatMessages,
        {
          message:inputText,
          sender:'user',
          
          id: crypto.randomUUID(),
         time: dayjs().valueOf()
        }
      ]

      setChatMessages(newChatMessages);

       const response = await Chatbot.getResponseAsync(inputText);
      setChatMessages([
        ...newChatMessages,
        {
          message:response,
          sender:'robot',
          id: crypto.randomUUID(),
        time: dayjs().valueOf()
            }
      ]);
      
          setLoading(false);
      
    }

    function handleKeyDown(event){
        if(event.key === 'Enter'){
          sendMessage();
        }

        else if(event.key === 'Escape'){
          setInputText('');
        }
      }

      function clearMessages() {
        setChatMessages([]);
      }
        return (
          <div className="chat-input-container">
            <input
            className="chat-input"
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={saveInputText}
              value={inputText}
              onKeyDown={handleKeyDown}
            />
            <button className="send-button" onClick={sendMessage}>Send</button>
            <button onClick={clearMessages}
            className='clear-button'>Clear</button>
          </div>
        );
      }
