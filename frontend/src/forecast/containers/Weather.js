/*
    Page Container for Weather Data
*/
import React from 'react';
import Cities from '../services/Cities';
import WeatherReport from '../components/WeatherReport';

export default class WeatherChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Show Waiting Icon
            reportData: this.props.reportData
        }
    }
    render() {
        if (!this.props.reportData) return false;
        return (
            <div> 
                <WeatherReport data={this.props.reportData}/> 
            </div>
        );
    }
}