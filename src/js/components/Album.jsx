import React, { Component } from 'react'

import PlayerBar from './PlayerBar'

export default class Album extends Component {
  
  render() {
    return (
      <div>
        <main class="album-view container narrow">

          <section class="clearfix">

            <div class="column half">
              <img src="assets/images/album_covers/01.png" class="album-cover-art" alt="album cover" />        
            </div>

            <div class="album-view-details column half">
              <h2 class="album-view-title">The Colors</h2>
              <h3 class="album-view-artist">Pablo Picasso</h3>
              <h5 class="album-view-release-info">1909 Spanish Records</h5>
            </div>

          </section>

          <table class="album-view-song-list"></table>

        </main>

        <PlayerBar />
      </div>
    )
  }
}