import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../sub_components/CollectionItem.jsx'

const Collection = ({ albums }) => {
  return (
    <div className="collection">
      <section className="album-covers clearfix">
        { albums.map((album, id) => <CollectionItem album={ album } key={`album${id}`} />) }
      </section>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps, null)(Collection)
