import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setCurrentAlbum } from '../actions'

class CollectionItem extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      hovered: ''
    }
  }
  
  handleMouseOver() {
    this.setState({ hovered: 'album-hovered' })
  }
  
  handleMouseOut() {
    this.setState({ hovered: '' })
  }
  
  render() {
    
    let { album, dispatch } = this.props
    
    return (
      <div className={ `${this.state.hovered} collection-album-container column fourth` }
           onMouseOver={ this.handleMouseOver.bind(this) }
           onMouseOut={ this.handleMouseOut.bind(this) }> 

        <Link to='/album'
              onClick={ dispatch.bind(null, setCurrentAlbum(album)) }
              onMouseOver={ this.handleMouseOver.bind(this) }
              onMouseOut={ this.handleMouseOut.bind(this) }>
          <img src={ album.albumArtUrl }
               className="album-cover-art"
               alt={ `${album.title} cover art`} />
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
}

export default connect()(CollectionItem)
