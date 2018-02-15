import React from 'react';
import LineBarChart from '../components/LineBarChart';

/*
    Exports Weather Chart to Weather Component
*/

export default class WeatherReport extends React.Component{
    render(){
        return (
            <div>
                <nav>
                    <div className='nav-wrapper'>
                        <div className='col s12'>Next 5 Day Forecast :{this.props.data.city.name} ({this.props.data.city.country}) </div>
                    </div>
                </nav>
                <LineBarChart data={this.props.data}/>
            </div>
        )
    }
}