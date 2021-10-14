import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledChat = styled.div`
  .msg {
    background-color: lavenderblush;
    padding: 5px;
    margin: 5px;
    width: 300px;
  }
`;


const Chat = () => {
  const [username, setUsername] = useState('')
  const [currentMessage, setCurrentMessage] = useState('');
  const [allMessages, setAllMessages] = useState([])
  const [nameSet, setNameSet] = useState(false)

  //fn to set the current msg
  const changeMessageText = (e) => {
    setCurrentMessage(e.target.value)
  }
  //fn to set the username
  const changeUsername = (e) => {
    setUsername(e.target.value)
  }

  const sendMessage = () => {
    //format of message to be sent
    const messageData = {username: username, message: currentMessage}
    //setting the state so the username is set for the chat, and so the message input clears after send
    setNameSet(true)
    setCurrentMessage('')
    //TODO: need to send the message
   
  }



  return (
    <StyledChat> 
      <div>{allMessages.map( (message, i) => <div className='msg' key={i}>{message.username}: {message.message}</div>)}</div>
      <p>
        username:  {nameSet ? username : <input type='text' value={username} onChange={changeUsername}></input>}
      </p>
      <p>
        message: <input type='text' value={currentMessage} onChange={changeMessageText}></input>
      </p>
      
      <button onClick={sendMessage}>send message</button>
    </StyledChat>
  )

}

export default Chat;