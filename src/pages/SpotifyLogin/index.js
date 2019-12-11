import React from 'react'
import Logo from '../../assets/Spotify_Icon_RGB_White.png'


import './spotifyLogin.css'

// function addToken(token) {
//   return { type: 'ADD_TOKEN', token }
// }

function Home() {

  const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }

      window.localStorage.setItem('spotifyToken', initial.access_token);
      return initial;
    }, {});

  return (
    <>
      <div className="loggedInWrapper">
        <h1 className="loggedInContent">Você está logado, e já pode fechar esta página</h1>
        <img src={Logo} className="spotifyLogoLogged" alt="spotify logo logged" />

      </div>
    </>
  )
}

export default Home
