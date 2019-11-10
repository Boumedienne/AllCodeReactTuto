import React from 'react';
import logo from './logo.svg';
import './App.css';
import {formatName} from './user'

function App() {
  const user ={
    firstname:'Happer',
    lastname:'Perz',
}
  return (
    
    <div>{formatName(user)}</div>
  );
}

export default App;
