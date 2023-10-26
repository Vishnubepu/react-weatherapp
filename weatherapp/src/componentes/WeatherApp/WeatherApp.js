import React, { useState } from 'react'
import './WeatherApp.css';
import search_ions from '../Assets/search.png'
import clear_ions from '../Assets/clear.png'
import cloud_ions from '../Assets/cloud.png'
import rain_ions from '../Assets/rain.png'
import drizzle_ions from '../Assets/drizzle.png'
import snow_ions from '../Assets/snow.png'
import wind_ions from '../Assets/wind.png'
import humidity_ions from '../Assets/humidity.png'
function WeatherApp() {
    let api_key='72fccb36dc97cfe43233ac580d2e5f0f'; 
    const [wicon,setWicon] = useState(cloud_ions)
    const search= async ()=>{
        const element =document.getElementsByClassName('cityInput')
        if(element[0].value==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response = await fetch (url);
        let data = await response.json();
        const humidity = document.getElementsByClassName('humidity-percentage')
        const wind =document.getElementsByClassName('wind-rate')
        const temprature = document.getElementsByClassName('weather-temp')
        const location=document.getElementsByClassName('weather-location')


        humidity[0].innerHTML= data.main.humidity+'%';
        wind[0].innerHTML= data.wind.speed+'km/hr';
        temprature[0].innerHTML=data.main.temp+'°C';
        location[0].innerHTML=data.name;

        if(data.weather[0].icon==='01d' || data.weather [0].icon==='01n')
        {
            setWicon(clear_ions)
        }
        else if (data.weather[0].icon==='02d' || data.weather [0].icon==='02n')
        {
            setWicon (cloud_ions)
        }
        else if (data.weather[0].icon==='03d' || data.weather [0].icon==='03n')
        {
            setWicon (drizzle_ions)
        }
        else if (data.weather[0].icon==='04d' || data.weather [0].icon==='04n')
        {
            setWicon (drizzle_ions)
        }
        else if (data.weather[0].icon==='09d' || data.weather [0].icon==='09n')
        {
            setWicon (rain_ions)
        }
        else if (data.weather[0].icon==='10d' || data.weather [0].icon==='10n')
        {
            setWicon (rain_ions)
        }
        else if (data.weather[0].icon==='13d' || data.weather [0].icon==='13n')
        {
            setWicon (snow_ions)
        }
        else{
            setWicon(clear_ions);
        }


    }
  return (
    <div className='container'>
       <div className="top-bar">
        <input type="text" className='cityInput' placeholder='search' />
        <div className="serch-icon" onClick={()=>{search()}}>
            <img src={search_ions} alt="" />
        </div>
       </div>
       <div className="weather-imgage">
        <img src={wicon} alt="" srcset="" />
       </div>
       <div className="weather-temp">30°c</div>
       <div className="weather-location">USA</div>
       <div className="data-container">
        <div className="element">
            <img src={humidity_ions} alt="" className='icon' />
            <div className="data">
                <div className="humidity-percentage">64%</div>
                <div className="text">Humidity</div>
            </div>
        </div>

        <div className="element">
            <img src={wind_ions} alt="" className='icon' />
            <div className="data">
                <div className="wind-rate">85km/hr</div>
                <div className="text">Wind spped</div>
            </div>
        </div>

       </div>
    </div>
  )
}

export default WeatherApp