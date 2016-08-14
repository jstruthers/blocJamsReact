import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setCurrentAlbum } from '../actions'

const CollectionItem = ({ album, dispatch}) => {
  return (
    <div className="collection-album-container column fourth"> 

      <Link to='/album'
            onClick={ dispatch.bind(null, setCurrentAlbum(album)) }>
        <img src={ album.albumArtUrl } className="album-cover-art" alt="album cover" />
      </Link>
      <div className="collection-album-info caption">
        <p>
          <Link className="album-title"
                to='/album'
                onClick={ dispatch.bind(null, setCurrentAlbum(album)) }>
            { album.title }
          </Link>
          <br />
          { album.artist }
          <br />
          { album.songs.length } songs
          <br />
        </p>
      </div>

    </div>
  )
}

export default connect()(CollectionItem)
