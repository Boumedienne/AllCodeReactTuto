import React from 'react';
import logo from './logo.svg';
import './App.css';
import {formatName,getGreeting,tick} from './user'
function Welcome(props){
return <h1>Hello, {props.name}</h1>
}
function App() {
  const user ={
    firstname:'Happer',
    lastname:'Perz',
}
  return (
    <>
    <div>{formatName(user)}</div>
  <div>{getGreeting()}</div>
<div>{tick()}</div>
<div></div>
  <Welcome name="Sra"/>
  <Welcome name="Hamoud"/>
  <div></div>
    </>

  );
}


export default App;
