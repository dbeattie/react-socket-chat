import React from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext();

const initState = {
  general: [
    {from: 'darren', msg: 'hello'}, 
    {from: 'derek', msg: 'hello'},
    {from: 'daryl', msg: 'hello'},
  ],
  topic2: [
    {from: 'darren', msg: 'hello'}, 
    {from: 'darren', msg: 'hello'},
    {from: 'darren', msg: 'hello'},
  ]
}

function reducer(state, action) {
  const {from, msg, topic} = action.payload;
  switch(action.type) {
    case 'RECEIVE MESSAGE':
      return {
        ...state, 
          [topic]: [
            ...state[topic],
              {from, msg}
          ]
      }
    default:
      return state;
  }
}
let socket;

export default function Store(props) {

  if (!socket) {
    socket = io(':3001');
  }
  
  const reducerHook = React.useReducer(reducer, initState);

  return (
    <CTX.Provider value={reducerHook}>
    {props.children}
    </CTX.Provider>
  )
  
};