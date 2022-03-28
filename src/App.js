import { useState } from 'react';
import './App.css';
import Search from './components/Search';

// hooks
import useRequest from './hooks/useRequest'

// toastify
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

function App() {
  const [searchResults, setSearchResults] = useState('Bucharest')
  
  // problem: this url uses the initial state always, i need to make it use the search value that i specify in the search box instead.

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${searchResults}&days=10&aqi=no&alerts=no`

  const { data } = useRequest(url);
  console.log(data);

  return (
    <div className='app-container'>
      <ToastContainer />
      <h2>Weather App</h2>
      {Object.keys(data).length !==0 && (
        <>
          <Search setSearchResults={setSearchResults} />
          
        <div className='location'>
          <h2>Location</h2>
          <h4>{data.location.name}, {data.location.region}, {data.location.country}</h4>
        </div>

          <CurrentWeather data={data} />
          <Forecast data={data} />
        </>
      )}
      
    </div>
  );
}

export default App;
