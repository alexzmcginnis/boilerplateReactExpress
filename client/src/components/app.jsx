import React from 'react';
import Child from './Child.jsx';
//any time extend from class need to create a constructor then invoke super in the constructor
const App = () => {

    return (
      <div>
        <h1>app</h1>
        <Child />
      </div>
    )
  }


export default App;