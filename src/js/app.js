import "babel-polyfill";

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import NavBar from './components/NavBar.jsx'
import Landing from './components/Landing.jsx'
import Collection from './components/Collection.jsx'
import Album from './components/Album.jsx'

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Landing } />
        <Route path='/collection' component={ Collection } />
        <Route path='/album' component={ Album } />
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('main')
);
