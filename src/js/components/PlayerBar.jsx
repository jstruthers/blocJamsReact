import React, { Component } from 'react'

export default class Album extends Component {
  
  render() {
    return (
      <section class="player-bar">
        <div class="container">
          <div class="control-group main-controls">
            <div class="previous">
              <span class="ion-skip-backward" ></span>
            </div>
            <div class="play-pause">
              <span class="ion-play" ></span>
            </div>
            <div class="next">
              <span class="ion-skip-forward" ></span>
            </div>
          </div>
          <div class="control-group currently-playing">
            <h2 class="song-name"></h2>
            <div class="seek-control">
              <div class="seek-bar">
                <div class="fill"></div>
                <div class="thumb"></div>
              </div>
              <div class="current-time"></div>
              <div class="total-time"></div>
            </div>
            <h2 class="artist-song-mobile"></h2>
            <h3 class="artist-name"></h3>
          </div>
          <div class="control-group volume">
            <span class="ion-volume-high icon"></span>
            <div class="seek-bar">
              <div class="fill"></div>
              <div class="thumb"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}