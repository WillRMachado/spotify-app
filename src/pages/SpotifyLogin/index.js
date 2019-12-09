import React from 'react'


// function addToken(token) {
//   return { type: 'ADD_TOKEN', token }
// }

function Home() {

    const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    
    window.localStorage.setItem('spotifyToken', initial.access_token);
    return initial;
  }, {});

  //
    return (
        <>
            <br />
            <p>Você está logado, e já pode fechar esta página</p>
        </>
    )
}

export default Home
