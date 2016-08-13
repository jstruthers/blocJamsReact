import React, { Component } from 'react'
import { connect } from 'react-redux'
import timecode from '../helpers/timecode'
import { setSong, playSong, pauseSong, stopSong } from '../actions'

class SongListItem extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      showIcon: false,
      icon: "",
      selected: false
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.track === this.props.song.track) {
      this.setState({ selected: true, showIcon: true })
      nextProps.playback === 'PLAYING'
        ? this.setState({ icon: 'ion-pause song-item-button' })
        : this.setState({ icon: 'ion-play song-item-button' })
    } else {
      this.setState({ selected: false, showIcon: false })
    }
    
    if (!this.state.selected) { stopSong() }
  }
  
  togglePlayback() {
    let { song, playback, setSong, playSong, pauseSong } = this.props
    
    if (this.state.selected) {
      if (playback === 'PLAYING') {
        pauseSong()
        this.setState({ icon: 'ion-play song-item-button' })
      } else if (playback === 'PAUSED') {
        playSong()
        this.setState({ icon: 'ion-pause song-item-button' })
      }
    } else {
      setSong(song)
      playSong()
      this.setState({
        icon: 'ion-pause song-item-button'
      })
    }
  }
  
  render() {
    
    let { song, playback, track } = this.props,
        { icon, showIcon, selected } = this.state
    
    return (
      <tr className="song-item"
          onClick={ this.togglePlayback.bind(this) }>
        <td className="song-item-icon">
          <span className={ icon }>
            { showIcon ? "" : song.track }
          </span>
        </td>
        <td className="song-item-title">{ song.title }</td>
        <td className="song-item-duration">{ timecode(song.duration) }</td>
      </tr>
    )
  }
}

function mapStateToProps(state) {
  return {
    playback : state.currentSong.playback,
    track: state.currentSong.data.track
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSong: (songNumber) => { dispatch( setSong(songNumber) )},
    playSong: () => { dispatch( playSong() )},
    pauseSong: () => { dispatch( pauseSong() )},
    stopSong: () => { dispatch( stopSong() )}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SongListItem)
  