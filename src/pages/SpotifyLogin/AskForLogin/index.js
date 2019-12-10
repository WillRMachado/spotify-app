import React, { useEffect } from 'react'
import OauthPopup from 'react-oauth-popup'
import { useSelector } from 'react-redux'

import './askForLogin.css'

function AskForLogin() {
    const token = useSelector(state => state.spotify.token)
    console.log(token)


    useEffect(() => {
        // console.log(token)
    }, [token])

    // token="" ? console.log("vazio") : console.log("cheio")

    if (token === "") {
        console.log("1")
    } else if (token === "expired") {
        console.log("2")
    } else {
        console.log("3")
    }

    return (
        <OauthPopup 
            url="https://accounts.spotify.com/authorize?client_id=0269347a0b89494a952339ac5aaf8f94&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fspotify-login"
        >
             <div className="oAuth">
          {(token=="")?"Clique aqui para logar no Spotify":""} 
          {(token=="expired")?"Clique aqui para logar novamente no Spotify":""} 
          {/* Clique aqui para ativar um token do Spotify */}
          </div>
        </OauthPopup>
    )
}

export default AskForLogin
