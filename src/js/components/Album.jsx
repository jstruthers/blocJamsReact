import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSong } from '../actions'

import SongListItem from './SongListItem.jsx'
import PlayerBar from './PlayerBar.jsx'

class Album extends Component {
  
  componentWillMount() {
    this.props.setSong(this.props.album.songs[0])
  }
  
  render() {
    
    let { album } = this.props
    
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { album: state.currentAlbum }
}

function mapDispatchToProps(dispatch) {
  return { setSong: (song) => { dispatch(setSong(song) )} }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)
