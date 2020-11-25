import React from 'react';
import './App.css';
import CounterButton from './containers/counter-button/counter-button';
import CounterScreen from './containers/counter-screen/counter-screen';
import WeatherDisplay from './containers/weather-display/weather-display';
import WeatherSearch from './containers/weather-search/weather-search';

function App() {
  return (
    <div className="App">
      <h1>Compteur</h1>
      <CounterScreen />
      <CounterButton />      
      <hr/>
      <h1>Meteo API</h1>
      <WeatherSearch />
      <WeatherDisplay />
    </div>
  );
}

export default App;
