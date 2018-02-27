import React from 'react'
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom'
/*
  Route Container for Application
*/
import Weather from './containers/Weather'; 
export default class Forecast extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          // Show Waiting Icon
          //reportData: <PreLoader />,
          selectedCityFromComponent: null
      };
      this.callbackSetSelectedCity = this.callbackSetSelectedCity.bind(this);
    }


    callbackSetSelectedCity(cityName) {
        console.log('Data in forecast', cityName);
        this.setState({ selectedCityFromComponent: cityName});
        this.props.setCityName(cityName);//Set cityname in parent
    }


    render() {
      var selectedCities = [];
      for (var i = 0; i < this.props.weatherdata; i++) {
        selectedCities.push(<div class='container hoverable root-container'>
        <div className="icon">
        <h3>Current Weather</h3>
          { this.props.weatherdata[i].icon && <img src={`/img/${this.props.weatherdata[i].icon}.svg`} /> }
        </div>
        <div class="report">
          <Weather reportData={this.props.weatherdata[i].reportData} />
        </div>
        
      </div>);

      }
      if (!selectedCities.length) return null;
      return (
        {selectedCities}
      )
    }
  }