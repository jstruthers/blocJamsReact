import React, { Component } from 'react'

import Nav from '../components/Nav'
import Main from '../components/Main'

export default class MainLayout extends Component {
  
  render() {
    return (
      <Nav />
      <Main />
    )
  }
}