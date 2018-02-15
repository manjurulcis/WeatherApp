import React from 'react'

/*
    Exports Pre-loader component to show waiting Icon
*/

export default class PreLoader extends React.Component {
    render() {
        return (
            <div className='row pre-loader'>
                <div className='progress col s12'>
                    <div className='indeterminate'></div>
                </div>
            </div>
        )
    }
}
