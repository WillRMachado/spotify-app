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



function Search() {

    const dispatch = useDispatch();


    async function busca() {
        console.log("adwad")
        const response = await searchApi.get('', {
            query: { "q": "nightwis*", "type": "artist" },
            headers: { "Authorization": "BearerBQAokmx7KRSqTFUxdBZhCMOtjP55UKdJRWJcjJxYdVR4BlKunjZd_aguPWYGs2y7M0_PwTHyfL7GhIyw7rbe26wLdeLKvHymaCBUT4Wx4tKvYzYsAd0D2NNuVEQKMvWm-twtrt0WrznigJQYxmI6QcqqeAn4SdmRr_8" }
        })
        console.log("j")
        console.log(response)
    }
    busca()



    function teste() {


        fetch("https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&market=US&limit=10&offset=5", {
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "content-type": "application/json",
                "authorization": "Bearer BQDad987xUetjK_a3E1J0q9o3Hh3sn2SDr8uLkEOVk_oggpeqYNiS0dinzL6CS7pURsPz78kj_n5f8-LQc0yAWkm1GG_PnwFoecZ_q4l43huYtaD79dy2vP4ogKrzFqWEy1m-y15uIYehCbsFXgloyWmDnrEo8359cU"
            },
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    }

    teste()

    // getting data from redux
    const searchText = useSelector(state => state.search.text)
    const token = useSelector(state => state.spotify)


    // setting data to redux
    const setToken = () => {
        dispatch(addToken(window.localStorage.getItem('spotifyToken')))
    }
    const setSearch = (text) => {
        dispatch(addSearchText(text))
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