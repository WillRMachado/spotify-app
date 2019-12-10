import React, { useEffect } from 'react'
import OauthPopup from 'react-oauth-popup'
import { useSelector, useDispatch } from 'react-redux'
import searchApi from '../../services/searchApi'


import './search.css'



// Accesing Redux Functions
function addToken(token) {
    return { type: 'ADD_TOKEN', token }
}
function addSearchText(text) {
    return { type: 'TYPE', text }
}
function addSearchResult(data) {
    return { type: 'SET_SEARCH', data }
}



function Search() {

    const dispatch = useDispatch();

    // getting data from redux
    const searchText = useSelector(state => state.search.text)
    const token = useSelector(state => state.spotify.token)

    // console.log(token)

    // on render
    useEffect(() => {
        setToken();
    }, []);


    useEffect(() => {
        setToken()
        async function SearchItens() {
            await searchApi.get("/search", {
                params: {
                    "q": "*" + searchText + "*",
                    "type": "artist,album,track"
                },
                headers: {
                    "authorization": "Bearer " + window.localStorage.getItem('spotifyToken')
                }
            }).then(function (response) {
                setSearchResult(response)
                // console.log(response);
            }).catch(function (response) {
                // console.log(response);
                if (window.localStorage.getItem('spotifyToken') == "") {
                    window.localStorage.setItem('spotifyToken', "")
                } else {
                    window.localStorage.setItem('spotifyToken', "expired");
                }
                setToken()
            })
        }
        SearchItens()
    }, [token, searchText])


    // setting data to redux
    const setToken = () => {
        dispatch(addToken(window.localStorage.getItem('spotifyToken')))
    }
    const setSearch = (text) => {
        dispatch(addSearchText(text))
    }
    const setSearchResult = (data) => {
        dispatch(addSearchResult(data))
    }






    return (
        <div className="searchBox">

            <h5>Busque por artistas, álbuns ou músicas</h5>
            <input
                className="searchInput"
                type="text"
                id="search"
                placeholder="Comece a escrever..."
                value={searchText}
                onChange={event => (setSearch(event.target.value))}
            />
            <hr />
        </div>
    )
}




export default Search