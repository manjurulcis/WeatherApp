/*
    Page Container for Weather Data
*/

import React from 'react';

export default class SelectCity extends React.Component {
    constructor() {
        super();
        this.state = {
            // Show Waiting Icon
            reportData: < PreLoader / >
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