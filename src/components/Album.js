import React from 'react'
import PropTypes from 'prop-types'

export default function Album ({ album }) {
// using `isRequired` to make sure a warning  is shown if the prop isn't provided
  Album.propTypes = {
    album: PropTypes.object.isRequired
  }
  return (
        <div className="album">
            <p>{album.artistName}</p>
            <p>{album.collectionName}</p>
            <p>{album.releaseDate}</p>
            <p>{album.artworkUrl60 || album.artworkUrl100}</p>
        </div>
  )
}
