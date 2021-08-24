import '../App.css'
import logo from '../logo.svg'
import React from 'react'
import PropTypes from 'prop-types'

export default function Album ({ albums, loading }) {
// propType validation, using `isRequired` to make sure a warning  is shown if the prop isn't provided
  Album.propTypes = {
    albums: PropTypes.object.isRequired,
    loading: PropTypes.bool
  }

  if (loading) {
    return (
    <div>
        <h2>Loading...</h2>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
    )
  }
  return (
    <div className="album-list">
        {albums.results.map((album) => (
        <div key={album.collectionId} className="album">
            <p><b>Name of artist:</b> {album.artistName}</p>
            <p><b>Album name:</b> {album.collectionName}</p>
            <p><b>Album release date:</b> {album.releaseDate.substring(0, 4)}</p>
            <p><b>Album artwork:</b>
                <a href={album.artworkUrl100}>
                    <br/>
                    <br/>
                    <img className="artwork-image" src={album.artworkUrl100} alt={album.collectionName + ' album cover'}/>
                </a>
            </p>
        </div>
        ))}
    </div>
  )
}
