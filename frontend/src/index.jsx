import React from 'react';
import ReactDOM from 'react-dom';
import Forecast from './forecast/app';
import ProcessData from './forecast/services/ProcessWeatherData';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async (cityName) => {
  try {
    const response = await fetch(`${baseURL}/weather/`+ cityName);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

const getWeatherForcast = async (cityName) => {
  try {
    const response = await fetch(`${baseURL}/forecast/`+ cityName);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
      currentCity: "Helsinki,FI", 
      reportData: null
    };
  }

  async componentWillMount() {
    const weather = await getWeatherFromApi(this.state.currentCity);
    this.setState({icon: weather.icon.slice(0, -1)});
    
    //weather report
    const weatherForecast = await getWeatherForcast(this.state.currentCity);
    let serverData = ProcessData(weatherForecast);
    this.state.reportData = {
      city: weatherForecast.city,
      data: serverData,
      xAxis: 'time',
      bar: 'rain',
      line1: 'Day',
      line2: 'temp',
      line3: 'wind',
      line4: 'humid'
    }
    console.log(this.state.reportData);
  }

  setCityName(cityName) {
    console.log('current city', cityName);
    this.state.currentCity = cityName;
    this.componentWillMount()
  }
  
  componentDidMount(){
    if (navigator.geolocation) {
      // geolocation is available
      console.log('working geo location')
      navigator.geolocation.getCurrentPosition(

        // Success callback
        function(position) {
            console.log(position)
            /*
            position is an object containing various information about
            the acquired device location:
    
            position = {
                coords: {
                    latitude - Geographical latitude in decimal degrees.
                    longitude - Geographical longitude in decimal degrees. 
                    altitude - Height in meters relative to sea level.
                    accuracy - Possible error margin for the coordinates in meters. 
                    altitudeAccuracy - Possible error margin for the altitude in meters. 
                    heading - The direction of the device in degrees relative to north. 
                    speed - The velocity of the device in meters per second.
                }
                timestamp - The time at which the location was retrieved.
            }
            */
    
        },
    
        // Optional error callback
        function(error){
    
            /* 
            In the error object is stored the reason for the failed attempt:
    
            error = {
                code - Error code representing the type of error 
                        1 - PERMISSION_DENIED
                        2 - POSITION_UNAVAILABLE
                        3 - TIMEOUT
    
                message - Details about the error in human-readable format.
            }
            */
    
        }
    );
    } 
    else {
      // geolocation is not supported
    }
  }

  render() {
    const { icon } = this.state;

    return (
      <div>
        <Forecast reportData={this.state.reportData} setCityName={this.setCityName.bind(this)} />

        <div className="icon">
          { icon && <img src={`/img/${icon}.svg`} /> }
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
