import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:1337')


const Chat = () => {
  
  const [username, setUsername] = useState('')
  const [currentMessage, setCurrentMessage] = useState('');
  const [allMessages, setAllMessages] = useState([])

  const changeMessageText = (e) => {
    setCurrentMessage(e.target.value)
  }

  const changeUsername = (e) => {
    setUsername(e.target.value)
  }

  const sendMessage = () => {
    const messageData = {username: username, message: currentMessage}
    socket.emit('message', messageData )
  }

  useEffect(() => {
    socket.on('receivedMessage', (data) => {
      setAllMessages((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div> 
      <div>{allMessages.map( (message, i) => <div key={i}>{message.username} {message.message}</div>)}</div>
      <input type='text' value={username} onChange={changeUsername}></input>
      <input type='text' value={currentMessage} onChange={changeMessageText}></input>
      <button onClick={sendMessage}>send message</button>
    </div>
  )

}

export default Chat;