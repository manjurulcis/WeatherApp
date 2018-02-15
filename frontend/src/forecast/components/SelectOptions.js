import React from 'react';

/*
    Export Select Options Component
*/

export default class SelectOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedIndex: -1};
    }

    componentDidMount() {
        // Materialize custom select Init
        $('select').material_select(this.props.handleSelect.bind(this));
    }
    render() {
        let options = this.props.options.map((option, i) => {
            return <option key={i} value={i}>{option}</option>;
        });
        return (
            <div className='input-field col s12'>
                <select>
                    <option value='' disabled selected>Select City</option>
                   {options}
                </select>
                <label></label>
            </div>
        );
    }
};

