import React from 'react'
import { connect } from 'react-redux'
import { timecode } from '../../helpers'
import { setSong, playSong, pauseSong, setPosition, setVolume } from '../../actions'

import MainControls from './MainControls.jsx'
import SeekBar from './SeekBar.jsx'

const PlayerBar = (
  { playback, album, track, position, duration, volume, setSong, playSong, pauseSong }
) => {

  return (
    <section className="player-bar">
      <div className="container">
  
        <MainControls 
          playback={ playback }
          album={ album }
          track={ track }
          setSong={ setSong }
          playSong={ playSong }
          pauseSong={ pauseSong } />

        <div className="control-group currently-playing">
          <h2 className="song-name">{ album.songs[track - 1].title }</h2>
          <div className="seek-control">
            <SeekBar currentFill={ position }
                     totalFill={ duration }
                     setCurrentFill={ setPosition } />
            <div className="current-time">{ timecode(position / 1000) }</div>
            <div className="total-time">{ timecode(album.songs[track - 1].duration) }</div>
          </div>
          <h2 className="artist-song-mobile">{ album.artist }</h2>
          <h3 className="artist-name">{ album.artist }</h3>
        </div>

        <div className="control-group volume">
          <span className="ion-volume-high icon"></span>
          <SeekBar currentFill={ volume }
                   totalFill={ 100 }
                   setCurrentFill={ setVolume } />
        </div>

      </div>
    </section>
  )
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
    pauseSong: () => { dispatch( pauseSong() )}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayerBar)
  