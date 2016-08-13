import React, { Component } from 'react'

export default class Album extends Component {
  
  render() {
    return (
      <section className="player-bar">
        <div className="container">
          <div className="control-group main-controls">
            <div className="previous">
              <span className="ion-skip-backward" ></span>
            </div>
            <div className="play-pause">
              <span className="ion-play" ></span>
            </div>
            <div className="next">
              <span className="ion-skip-forward" ></span>
            </div>
          </div>
          <div className="control-group currently-playing">
            <h2 className="song-name"></h2>
            <div className="seek-control">
              <div className="seek-bar">
                <div className="fill"></div>
                <div className="thumb"></div>
              </div>
              <div className="current-time"></div>
              <div className="total-time"></div>
            </div>
            <h2 className="artist-song-mobile"></h2>
            <h3 className="artist-name"></h3>
          </div>
          <div className="control-group volume">
            <span className="ion-volume-high icon"></span>
            <div className="seek-bar">
              <div className="fill"></div>
              <div className="thumb"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}