import React from 'react';
import './App.css';
import CounterButton from './containers/counter-button/counter-button';
import CounterScreen from './containers/counter-screen/counter-screen';

function App() {
  return (
    <div className="App">
      <h1>Compteur</h1>
      <CounterScreen />
      <CounterButton />      
    </div>
  );
}

export default App;
