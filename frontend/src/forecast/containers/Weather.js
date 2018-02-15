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
    render() {
        return (
            <div> {this.state.reportData} </div>
        );
    }
}