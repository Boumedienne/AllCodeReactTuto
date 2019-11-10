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