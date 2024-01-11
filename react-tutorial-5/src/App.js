import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoList from './components/Demo/DemoList';
// import DemoComponent from './components/Demo/DemoComponent';

function App() {
  // const [isTrue, setIsTrue] = useState(false);
  // const [allowToggle, setIsAllowed] = useState(false);

  const [listTitle, setListTitle] = useState('My List');
  const [isDescendingOrder, setIsDescendingOrder] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const changeOrderHandler = useCallback(() => {
    setIsDescendingOrder((prev) => !prev);
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return isDescendingOrder
      ? [...listItems].sort((a, b) => b - a)
      : [...listItems].sort((a, b) => a - b);
  }, [listItems, isDescendingOrder]);


  // const setTrue = useCallback(() => {
  //   if (allowToggle) {
  //     setIsTrue(prev => !prev)
  //   }
  // }, [allowToggle]);

  // const allowtoggler = () => {
  //   setIsAllowed(true)
  // }

  return (
    <div className="app">
      <h1>Hi there!</h1>

      {/* <DemoComponent show={isTrue} />
      <Button type='submit' onClick={setTrue}>Set true</Button>
      <Button type='submit' onClick={allowtoggler}>Allow Toggle</Button> */}

      <DemoList title={listTitle} items={sortedList} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>
        Change to {isDescendingOrder ? 'Ascending' : 'Descending'} Order
      </Button>
    </div>
  );
}

export default App;




