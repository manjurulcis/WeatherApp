import React from 'react';
import { Link } from 'react-router-dom';
import SelectOptions from '../components/SelectOptions';
import SuccessButton from '../components/SuccessButton';
import Cities from '../services/Cities';

/*
    Page Container fto Select City
*/

let cities;
export default class SelectCity extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // Show Waiting Icon
        }
    }
    handleSelect(){
        this.props.setSelectedCity(cities[$('select').val()]);
        console.log(window.selectedCity);
    }
    updateState(){
        console.log('update state called')
    }
    render (){
        cities = Cities.getCities();
        return (
            <div>
                <div className='row sc-container'>
                    <div className='col s6 offset-s1'><SelectOptions options={cities} handleSelect={this.handleSelect.bind(this)}/></div>
                    <div className='col s4 enter-button'><button onClick={this.updateState} name="show">Show </button></div>
                </div>
            </div>    
        );
    }
}