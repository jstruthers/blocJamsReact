import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sound from 'react-sound'
import { setSong, getSongStatus, stopSong, playSong } from '../actions'

import SongListItem from '../sub_components/SongListItem.jsx'
import PlayerBar from '../sub_components/player_bar/PlayerBar.jsx'

class Album extends Component {
  
  componentDidMount() {
    let { album, setSong } = this.props
    setSong(album.songs[0])
  }
  
  handleSongEnd() {
    let { album, track, stopSong, playSong, setSong } = this.props

    stopSong()
    if (track < album.songs.length) {
      setSong(album.songs[track])
      playSong()
    }
  }
  
  render() {
    
    let { album, volume, position, playback, songUrl, stopSong, getSongStatus } = this.props
    
    return (
      <div className="album">
        <main className="album-view container narrow">

          <section className="clearfix">

            <div className="column half">
              <img src="./images/album_covers/01.png" className="album-cover-art" alt="album cover" />        
            </div>

            <div className="album-view-details column half">
              <h2 className="album-view-title">{ album.title }</h2>
              <h3 className="album-view-artist">{ album.artist }</h3>
              <h5 className="album-view-release-info">{ `${album.year} ${album.label}` }</h5>
            </div>

          </section>

          <table className="album-view-song-list">
            <tbody>
            {
              album.songs.map((song, key) => {
                return (
                  <SongListItem song={ song }
                                key= { `${album.title}_song${key}`} />
                )
              })
            }
            </tbody>
          </table>

        </main>

        <PlayerBar />
        
        <Sound url={ songUrl }
               playStatus={ playback ? Sound.status[playback] : 'STOPPED' }
               volume={ volume }
               onPlaying={ getSongStatus }
               position={ position }
               onFinishedPlaying={ this.handleSongEnd.bind(this) } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    album: state.currentAlbum,
    track: state.currentSong.data.track,
    songUrl: state.currentSong.data.audioUrl,
    playback: state.currentSong.playback,
    volume: state.currentSong.volume,
    position: state.currentSong.position,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSong: (song) => { dispatch( setSong(song) )},
    stopSong: () => { dispatch( stopSong() )},
    playSong: () => { dispatch( playSong() )},
    getSongStatus: (status) => { dispatch( getSongStatus(status) )}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)
