import React from 'react';
import Chat from './Chat.jsx'
//any time extend from class need to create a constructor then invoke super in the constructor
const App = () => {

    return (
      <div>
        <h2>I am a react element!</h2>
        <Chat />
      </div>
    )
  }


export default App;