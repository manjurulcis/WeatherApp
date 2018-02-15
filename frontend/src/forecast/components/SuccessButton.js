import React from 'react';

/*
    Export Button Component
*/

export default class SuccessButton extends React.Component {
    render() {
        return <div className= 'waves-effect waves-light btn valign-wrapper' onClick={this.props.onClick}> { this.props.name } </div>;
    }
}

