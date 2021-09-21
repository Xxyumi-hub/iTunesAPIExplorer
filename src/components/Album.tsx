import '../App.css'
import logo from '../logo.svg'

interface AlbumProps {
  albums: object | any;
  loading: boolean;
}

export default function Album ({ albums, loading }:AlbumProps) {
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
        {albums.results.map((album:any) => (
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
