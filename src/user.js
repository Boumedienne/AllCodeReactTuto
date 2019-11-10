import React from 'react';

 

export function formatName(user){
    return user.firstname +'' +user.lastname;
}

export function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  export function tick(){
return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>)
  }