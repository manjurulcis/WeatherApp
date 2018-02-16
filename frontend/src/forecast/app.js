import React from 'react'
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom'
/*
  Route Container for Application
*/
import SelectCity from './containers/SelectCity'
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


    callbackSetSelectedCity(cityId) {
        console.log('Data in forecast', cityId);
        this.setState({ selectedCityFromComponent: cityId});
    }


    render() {
      return (
        <div class='container hoverable root-container'>
          <SelectCity color='blue' setSelectedCity={this.callbackSetSelectedCity} />
        </div>
      )
    }
  }