import React from 'react'

function CurrentWeather({data}) {
  return (
      <div className='current-weather'>
        <img src={data.current.condition.icon} alt="" />
        <h1>{data.current.temp_c}<span>&#8451;</span></h1>
        <div className='content'>
          <div>Precipitation: {data.current.precip_in}</div>
          <div>Wind: {data.current.wind_kph}</div>
        </div>

      </div>
  )
}

export default CurrentWeather