import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoComponent from './components/Demo/DemoComponent';

function App() {
  const [isTrue, setIsTrue] = useState(false);

  const setTrue = () => {
    setIsTrue(prev => !prev)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoComponent show={isTrue} />
      <Button type='submit' onClick={setTrue}>Set true</Button>
    </div>
  );
}

export default App;
