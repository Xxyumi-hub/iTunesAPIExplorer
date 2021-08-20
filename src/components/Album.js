import React from 'react'
import PropTypes from 'prop-types'

export default function Album ({ album }) {
// using `isRequired` to make sure a warning  is shown if the prop isn't provided
  Album.propTypes = {
    album: PropTypes.object.isRequired
  }
  return (
        <div className="album">
            <p>Name of artist: {album.artistName}</p>
            <p>Album name: {album.collectionName}</p>
            <p>Album release date: {album.releaseDate.substring(0, 4)}</p>
            <p>Album artwork:
                <a href={album.artworkUrl60 || album.artworkUrl100}>
                {album.artworkUrl60 || album.artworkUrl100}
                </a>
            </p>
            <br/>
        </div>
  )
}
