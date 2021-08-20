import React from 'react';

export default function Album({album}) {
    return (
        <div className="album">
            <p>{album.artistName}</p>
            <p>{album.collectionName}</p>
            <p>{album.releaseDate}</p>
            <p>{album.artworkUrl60 || album.artworkUrl100}</p>
        </div>
    )
}

