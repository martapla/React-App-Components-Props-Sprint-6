import React, { useState } from 'react';
import Buttons from './components/Buttons/Buttons';
import Escena from './components/Escena/Escena';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className = "app">
      <Buttons count={count} setCount={setCount} />
      <Escena count={count} />
    </div>
    
  );
}

export default App;






