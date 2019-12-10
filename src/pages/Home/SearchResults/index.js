import React from 'react'
import Albun from './Albun.js'
import { useSelector, useDispatch } from 'react-redux'




function SearchResults() {



    const searchData = useSelector(state => state.searchResults)




    // const { data: { data: { artists = {items:[]} } = [] } = [] } = searchData
    const { data: { data: { albums = {items:[]} } = [] } = [] } = searchData
    // const { data: { data: { tracks = "" } = "" } = "" } = searchData


    // console.log(searchData)

    // console.log(artists)
    // console.log(albums)
    // console.log(tracks)


    return (
        <div>
            {albums.items.map(request => (
                <ul id="menu">
                <Albun img = {request.images[1].url} name={request.name} artist={request.artists[0].name} />
                    {/* <p> */}
                    {/* <img src={request.images[2].url} />	
                        
                        {request.name}
                        {request.artists[0].name} */}
                        {/* <strong>{request.user.email}</strong> esta solicitando uma reserva em <strong>{request.spot.company}</strong> para a data: <strong>{request.date}</strong> */}
                    {/* </p> */}
                </ul>
            )

            )}
        </div>
    )
}

export default SearchResults
