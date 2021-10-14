import React from 'react';
import Chat from './Chat.jsx'
//any time extend from class need to create a constructor then invoke super in the constructor
const App = () => {

    return (
      <div>
        <h1>Live Chat</h1>
        <Chat />
      </div>
    )
  }


export default App;