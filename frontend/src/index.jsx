import React from 'react';
import ReactDOM from 'react-dom';
import Forecast from './forecast/app';
import ProcessData from './forecast/services/ProcessWeatherData';
import Cities from './forecast/services/Cities';
import SelectOptions from './forecast/components/SelectOptions';

const baseURL = process.env.ENDPOINT;
let cities;
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
      selectedCities: [],
      currentCity: "Helsinki,FI", 
      cities: null
    };
  }

  async componentWillMount(cityname) {
    if (cityname == undefined) return;
    const weather = await getWeatherFromApi(cityname);
    console.log(weather);
    
    //weather report
    const weatherForecast = await getWeatherForcast(cityname);
    console.log(weatherForecast);
    let serverData = ProcessData(weatherForecast);
    let reportData = {
      city: weatherForecast.city,
      data: serverData,
      xAxis: 'time',
      bar: 'rain',
      line1: 'Day',
      line2: 'temp',
      line3: 'wind',
      line4: 'humid'
    }
    this.state.selectedCities.push({icon: weather.icon.slice(0, -1), reportData: reportData, city: cityname });
    this.setState({weatherdata: this.selectedCities});
    this.shouldComponentUpdate()
  }

  setCityName() {
    let cityName = cities[$('select').val()];
    this.state.currentCity = cityName;
    this.componentWillMount(cityName)
  }
  
  componentDidMount(){
    this.setState({weatherdata: this.state.selectedCities})
  }

  renderCityData(){
    console.log(this.state.selectedCities);
    if (this.state.selectedCities.length == 0) return;
    const reportblock = this.state.selectedCities.map((option, i) => {
      return <Forecast icon={option.icon} reportData={option.reportData} />;
    });

    return reportblock;
  }

  render() {
     cities = Cities.getCities();
    return (
      <div>
        <div>
                <div className='row sc-container'>
                    <div className='col s6 offset-s1'><SelectOptions options={cities} handleSelect={this.setCityName.bind(this)}/></div>
                </div>
        </div>
        {this.renderCityData}
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
