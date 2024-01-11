import React, { useState, useCallback } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoComponent from './components/Demo/DemoComponent';

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [allowToggle, setIsAllowed] = useState(false);

  const setTrue = useCallback(() => {
    if (allowToggle) {
      setIsTrue(prev => !prev)
    }
  }, [allowToggle]);

  const allowtoggler = () => {
    setIsAllowed(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoComponent show={isTrue} />
      <Button type='submit' onClick={setTrue}>Set true</Button>
      <Button type='submit' onClick={allowtoggler}>Allow Toggle</Button>
    </div>
  );
}

export default App;
