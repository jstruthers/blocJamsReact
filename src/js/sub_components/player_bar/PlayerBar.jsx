import React, { Component } from 'react'
import { connect } from 'react-redux'
import { timecode } from '../../helpers'
import { setSong, playSong, pauseSong, setPosition, setVolume } from '../../actions'

import MainControls from './MainControls.jsx'
import SeekBar from './SeekBar.jsx'

class PlayerBar extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      mute: false
    }
  }
  
  toggleMute() {
    this.setState({ mute: this.state.mute ? false : true })
    if (this.state.mute) {
      this.props.setVolume( this.state.prevVolume )
    } else {
      this.setState({ prevVolume: this.props.volume })
      this.props.setVolume( 0 )
    }
  }

  render() {
    let {
      playback, album, track, position, duration, volume,
      setSong, playSong, pauseSong
    } = this.props
    
    return (
      <section className="player-bar">
        <div className="control-row">

          <MainControls 
            playback={ playback }
            album={ album }
            track={ track }
            setSong={ setSong }
            playSong={ playSong }
            pauseSong={ pauseSong } />

          <div className="currently-playing">
            <h2 className="song-name">{ album.songs[track - 1].title }</h2>
            <div className="seek-control">
              <SeekBar currentFill={ position }
                       totalFill={ duration }
                       setCurrentFill={ setPosition } />
              <div className="current-time">{ timecode(position / 1000) }</div>
              <div className="total-time">{ timecode(album.songs[track - 1].duration) }</div>
            </div>
            <h2 className="artist-song-mobile">
              { `${album.artist} - ${album.songs[track - 1].title}` }
            </h2>
            <h3 className="artist-name">{ album.artist }</h3>
          </div>

          <div className="volume">
            <span className={
                    this.state.mute
                      ? "ion-android-volume-off icon"
                      : "ion-volume-high icon"}
                  onClick={ this.toggleMute.bind(this) }></span>
            <SeekBar currentFill={ volume }
                     totalFill={ 100 }
                     setCurrentFill={ setVolume } />
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
    track: state.currentSong.data.track,
    position: state.currentSong.position,
    duration: state.currentSong.duration,
    volume: state.currentSong.volume
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSong: (songNumber) => { dispatch( setSong(songNumber) )},
    playSong: () => { dispatch( playSong() )},
    pauseSong: () => { dispatch( pauseSong() )},
    setVolume: (volume) => { dispatch( setVolume(volume) )}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayerBar)
  