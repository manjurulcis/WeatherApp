/*
    Page Container for Weather Data
*/

import React from 'react';

import Cities from '../services/Cities';
import WeatherApi from '../services/WeatherApi';
import ProcessWeatherData from '../services/ProcessWeatherData';

export default class SelectCity extends React.Component {
    constructor() {
        super();
        this.state = {
            // Show Waiting Icon
            reportData: <PreLoader />
        }
    }
    handleServerData(data) {
        // Callback to handle Server Data
        if (data.cod === '200') {
            let serverData = ProcessWeatherData(data);
            //console.log(serverData);
            let chartData = {
                city: data.city,
                data: serverData,
                xAxis: 'time',
                bar: 'rain',
                line1: 'Day',
                line2: 'temp',
                line3: 'wind',
                line4: 'humid'
            }
            // Show WeatherReport to View
            this.setState({
                reportData: <WeatherReport data={chartData}/>
            })
        } else {
            console.error('handleServerData : Something Went Wrong ', data);
        }
    }
    componentWillMount() {
    }

    componentDidMount() {
        // Get City ID
        window.selectedCity = window.selectedCity !== undefined ? window.selectedCity : 'Helsinki';
        const cityID = Cities.getCityID(window.selectedCity);
        // Dispatch GET request to server and provide CallBack function
        $.ajax(WeatherApi(cityID, this.handleServerData.bind(this)));
    }

    render() {
        return (
            <div> {this.state.reportData} </div>
        );
    }
}