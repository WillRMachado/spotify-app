import React, { useState, useEffect } from 'react'
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



    useEffect(() => {
        setToken()
        async function SearchItens() {
            searchApi.get(null, {
                params: {
                    "q": "*" + searchText + "*",
                    "type": "artist,album,track"
                },
                headers: {
                    "authorization": "Bearer " + token
                }
            }).then(function (response) {
                setSearchResult(response)
                // console.log(response);
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
    
    
    // on render
    useEffect(() => {
        setToken();
    }, []);




    return (
        <div className="searchBox">
            <OauthPopup
                url="https://accounts.spotify.com/authorize?client_id=0269347a0b89494a952339ac5aaf8f94&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fspotify-login"
            >
                <div>Click me to log into Spotify</div>
            </OauthPopup>
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