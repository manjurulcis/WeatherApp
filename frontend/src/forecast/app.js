import React from 'react'
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom'
/*
  Route Container for Application
*/

export default class App extends React.Component {
    render() {
      return (
        <Router history={browserHistory}>
        </Router>
      )
    }
  }