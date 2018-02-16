import React from 'react'
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom'
/*
  Route Container for Application
*/
import SelectCity from './containers/SelectCity'
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
      return (
        <div class='container hoverable root-container'>
          <SelectCity color='blue' setSelectedCity={this.callbackSetSelectedCity} />
          <Weather reportData={this.props.reportData} />
        </div>
      )
    }
  }