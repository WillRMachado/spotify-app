import React from 'react'
import './album.css'
import { Link  } from 'react-router-dom'


function album({ img, name, artist, id}) {
    // let history = useHistory();

    return (
        <Link to={"album/#album_id="+id}>
        <div className="albumItem" >
            <img src={img} className="albumImage" alt="album cover" />
            <h4 className="albumName">{name}</h4>
            <h5 className="albumArtistName">{artist}</h5>
        </div>
        </Link>
    )
}

export default album
