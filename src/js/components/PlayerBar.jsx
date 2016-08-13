import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSong, playSong, pauseSong } from '../actions'

export default class PlayerBar extends Component {
  
  constructor(props) {
    super(props)
    this.state = { icon: "ion-play" }
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.playback === 'PLAYING') {
      this.setState({ icon: 'ion-pause' })
    } else if (nextProps.playback === 'PAUSED' || this.props.playback === 'STOPPED') {
      this.setState({ icon: 'ion-play' })
    }
  }
  
  togglePlayback() {
    let { playback, pauseSong, playSong } = this.props
    if (playback === 'PLAYING') {
      pauseSong()
      this.setState({ icon: 'ion-pause' })
    } else if (playback === 'PAUSED' || playback === 'STOPPED') {
      playSong()
      this.setState({ icon: 'ion-play' })
    }
  }
  
  skip(song, back) {
    let { album, track, setSong, playSong } = this.props

    if (track === 1 && back) {
      setSong(album.songs[album.songs.length - 1])
      playSong()
    } else if (track === album.songs.length && !back) {
      setSong(album.songs[0])
      playSong()
    } else {
      setSong(song)
      playSong()
    }
  }
  
  render() {
    let { playback, album, track, setSong, playSong, pauseSong } = this.props
    
    return (
      <section className="player-bar">
        <div className="container">

          <div className="control-group main-controls">
            <div className="previous"
                 onClick={
                   this.skip.bind(this, album.songs[track - 2], true)
                 }>
              <span className="ion-skip-backward" ></span>
            </div>
            <div className="play-pause"
                 onClick={ this.togglePlayback.bind(this) }>
              <span className={ this.state.icon } ></span>
            </div>
            <div className="next"
                 onClick={
                   this.skip.bind(this, album.songs[track], false)
                 }>
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

function mapStateToProps(state) {
  return {
    album: state.currentAlbum,
    playback: state.currentSong.playback,
    track: state.currentSong.data.track
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSong: (songNumber) => { dispatch( setSong(songNumber) )},
    playSong: () => { dispatch( playSong() )},
    pauseSong: () => { dispatch( pauseSong() )}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayerBar)
  