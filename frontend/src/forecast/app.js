import React from 'react'
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom'
/*
  Route Container for Application
*/
import SelectCity from './containers/SelectCity'
import Weather from './containers/Weather'
export default class App extends React.Component {
    render() {
      return (
        <Router history={browserHistory}>
        <div>
            <Route exact path='/' component={SelectCity} />
            <Route path='/weather' component={Weather} />
          </div>
        </Router>
      )
    }
  }