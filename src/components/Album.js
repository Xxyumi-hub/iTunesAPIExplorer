import React from 'react'
import PropTypes from 'prop-types'

export default function Album ({ albums, loading }) {
// propType validation, using `isRequired` to make sure a warning  is shown if the prop isn't provided
  Album.propTypes = {
    albums: PropTypes.object.isRequired,
    loading: PropTypes.bool
  }

  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
        <div className="album-list">
        {albums.results.map((album) => (
           <div key={album.collectionId} className="album">
            <br/>
            <p>Name of artist: {album.artistName}</p>
            <p>Album name: {album.collectionName}</p>
            <p>Album release date: {album.releaseDate.substring(0, 4)}</p>
            <p>Album artwork:
                <a href={album.artworkUrl100}>
                    <br/>
                    <img src={album.artworkUrl100}/>
                </a>
            </p>
        </div>
        ))}
      </div>
  )
}
