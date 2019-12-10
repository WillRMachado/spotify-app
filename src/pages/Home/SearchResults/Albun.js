import React from 'react'
import './Albun.css'

function Albun({ img, name, artist}) {
    return (
        <div className="albumItem">
            <img src={img} />
            <p>{name}</p>

            <p>{artist}</p>
        </div>
    )
}

export default Albun
