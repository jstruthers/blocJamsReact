import React, { Component } from 'react'

export default class MainControls extends Component {
    
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
    
    let { album, track } = this.props
    
    return (
      <div className="main-controls">
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
    )
  }
}
