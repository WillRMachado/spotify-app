import React, { useEffect } from 'react'
import OauthPopup from 'react-oauth-popup'
import { useSelector, useDispatch } from 'react-redux'

import './askForLogin.css'



function addToken(token) {
    return { type: 'ADD_TOKEN', token }
}



function AskForLogin() {


    const dispatch = useDispatch();

    const token = useSelector(state => state.spotify.token)
    console.log(token)


    useEffect(() => {
        setToken()
    }, [token])

    // token="" ? console.log("vazio") : console.log("cheio")

    // if (token === "") {
    //     console.log("1")
    // } else if (token === "expired") {
    //     console.log("2")
    // } else {
    //     console.log("3")
    // }




    const setToken = () => {
        dispatch(addToken(window.localStorage.getItem('spotifyToken')))
    }


    return (
        <OauthPopup 
            url="https://accounts.spotify.com/authorize?client_id=0269347a0b89494a952339ac5aaf8f94&response_type=token&redirect_uri=https%3A%2F%2Fspotifywill.netlify.com%2Fspotify-login"
        >
             <div className="oAuth">
          {(token=="")?"Clique aqui para logar no Spotify":""} 
          {(token=="expired")?"Clique aqui para logar novamente no Spotify":""} 
          </div>
        </OauthPopup>
    )
}

export default AskForLogin
