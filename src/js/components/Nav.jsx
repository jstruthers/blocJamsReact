import React, { Component } from 'react'

export default class Nav extends Component {
  
  render() {
    return (
      <nav class="navbar"><!--    navigation bar-->

        <a href="index.html" class="logo">
          <img src="assets/images/bloc_jams_logo.png" alt="Bloc Jams Logo" class="logo" />
        </a>

        <div class="links-container">
          <a href="collection.html" class="navbar-link">collection</a>
        </div>

      </nav>
    )
  }
}