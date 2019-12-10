import React from 'react'
import Album from './Album/Album.js'
import { useSelector, useDispatch } from 'react-redux'

import './SearchResults.css'





function SearchResults() {



    const searchData = useSelector(state => state.searchResults)
    const searchText = useSelector(state => state.search.text)





    // const { data: { data: { artists = {items:[]} } = [] } = [] } = searchData
    const { data: { data: { albums = { items: [] } } = [] } = [] } = searchData
    // const { data: { data: { tracks = "" } = "" } = "" } = searchData


    // console.log(searchData)

    // console.log(artists)
    // console.log(albums)
    // console.log(tracks)


    return (
        <>
            <div className="searchWrapper">
            <h3>{searchText ? `Resultados para "${searchText}"`:'' }</h3>
                <div className="searchResultBox">
                    {albums.items.map(request => (
                        <div key={request.id} className="searchResult">
                            <Album img={request.images[1].url} name={request.name} artist={request.artists[0].name}  id={request.id}/>
                        </div>
                    )

                    )}
                </div>
            </div>
        </>
    )
}

export default SearchResults
