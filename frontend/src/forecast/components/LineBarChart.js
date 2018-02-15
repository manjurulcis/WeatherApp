import React from 'react';
import {ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

/*
  Exports Chart Component
*/

export default class LineBarChart extends React.Component{
	render () {
  	return (
      <ResponsiveContainer width='90%' aspect={4.0/3.0}>
    	<ComposedChart data={this.props.data.data}
            margin={{top: 50, right: 20, bottom: 20, left: 20}}>
          <XAxis dataKey={this.props.data.xAxis} stroke='#26a69a'/>
          <YAxis stroke='#26a69a'/>
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey={this.props.data.line1} stroke='#ee6e73' />
          <Bar dataKey={this.props.data.bar} barSize={20} fill='#26a69a' unit='cm'/>
          <Line type='monotone' dataKey={this.props.data.line2} stroke='#26a69a' unit='&deg;c'/>
          <Line type='monotone' dataKey={this.props.data.line3} stroke='#8884d8' unit=' m/s'/>
          <Line type='monotone' dataKey={this.props.data.line4} stroke='#ee6e73' unit=' %'/>
       </ComposedChart>
       </ResponsiveContainer>
    );
  };
};