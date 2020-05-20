import React from 'react';
import Dashboard from './Dashboard';
import Store from './Store';
import './App.css';

//I don't seem to be getting anything stored in state (local storage) as the result of using context or the reducer see https://www.youtube.com/watch?v=hiiaHyhhwBU&t=3017s but there is no repo so hard to know where I went wrong at the moment


function App() {
  return (
    <div className="App">
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default App;
