import React from 'react';
import PropTypes from 'prop-types';

/*
    Export Button Component
*/

export default class SuccessButton extends React.Component {
    render() {
        return <div className= 'waves-effect waves-light btn valign-wrapper' onClick={this.props.onClick}> { this.props.name } </div>;
    }
}

SuccessButton.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string.isRequired,
};
