import React, { Component } from 'react'
import Sound from 'react-sound'
import { connect } from 'react-redux'
import timecode from '../helpers/timecode'
import { setSong, playSong, pauseSong, stopSong, getSongStatus } from '../actions'

class SongListItem extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      icon: "",
      selected: false
    }
  }
  
  componentWillReceiveProps(nextProps) {
    nextProps.track === this.props.song.track
      ? this.setState({ selected: true })
      : this.setState({ selected: false })
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
  
  renderSound(status) {
    let { song, songUrl, getSongStatus, stopSong } = this.props

    return (
      <Sound url={ songUrl }
             playStatus={ Sound.status[status] }
             onPlaying={ getSongStatus.bind(null, status) }
             onFinishedPlaying={ stopSong } />
    )
  }
  
  render() {
    
    let { song, songUrl, playback, track } = this.props,
        { icon, selected } = this.state
    
    return (
      <tr className="song-item"
          onClick={ this.togglePlayback.bind(this) }>
        <td className="song-item-icon">
          { selected
              ? (<span className={ icon }>
                  { icon ? "" : song.track }
                </span>)
              : <span>{ song.track }</span>
          }
        </td>
        <td className="song-item-title">{ song.title }</td>
        <td className="song-item-duration">{ timecode(song.duration) }</td>
        <td style={{ display: 'none' }}>
          { selected ? this.renderSound(playback) : "" }
        </td>
      </tr>
    )
  }
}

function mapStateToProps(state) {
  return {
    playback : state.currentSong.playback,
    songUrl : state.currentSong.data.audioUrl,
    track: state.currentSong.data.track
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSong: (songNumber) => { dispatch( setSong(songNumber) )},
    playSong: () => { dispatch( playSong() )},
    pauseSong: () => { dispatch( pauseSong() )},
    stopSong: () => { dispatch( stopSong() )},
    getSongStatus: (status) => { dispatch( getSongStatus(status) )}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SongListItem)
  