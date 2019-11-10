import React from 'react';
import logo from './logo.svg';
import './App.css';
import {formatName,getGreeting,Clock,Toggle} from './user'
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
<Clock date={new Date()}/>
<div></div>
  <Welcome name="Sra"/>
  <Welcome name="Hamoud"/>
  <Toggle/>
  <div></div>
    </>

  );
}


export default App;
