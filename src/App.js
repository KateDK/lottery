import React from 'react';
import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery/>
      <Lottery title='Mini Daily'/>
    </div>
  );
}

export default App;
