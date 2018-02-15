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
    handleSelect(){
        window.selectedCity = cities[$('select').val()];
        //console.log(window.selectedCity);
    }
    render (){
        cities = Cities.getCities();
        return (
                <div className='row sc-container'>
                    <div className='col s6 offset-s1'><SelectOptions options={cities} handleSelect={this.handleSelect}/></div>
                    <Link to='/weather'><div className='col s4 enter-button'><SuccessButton name='Enter' /></div></Link>
                </div>
        );
    }
}