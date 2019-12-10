import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import searchApi from '../../services/searchApi'


function addAlbumData(data) {
    return { type: 'SET_ALBUM_DATA', data }
}


function AlbunDetails() {
    const dispatch = useDispatch();


    const token = window.localStorage.getItem('spotifyToken')
    const albumData = useSelector(state => state.albumData.data)
    console.log(albumData)
    const albumCover = (albumData.data ? albumData.data.images[1].url : "")
    const albumTracks = (albumData.data ? albumData.data.tracks.items :[])
    console.log(albumTracks)




    const hash = window.location.hash
        .substring(1)
        .split("&")
        .reduce(function (initial, item) {
            if (item) {
                var parts = item.split("=");
                initial[parts[0]] = decodeURIComponent(parts[1]);
            }
            return initial;
        }, {});




    useEffect(() => {
        async function getAlbumData() {
            await searchApi.get("/albums/" + hash.album_id, {
                headers: {
                    "authorization": "Bearer " + token
                }
            }).then(function (response) {
                setAlbumData(response);
            })
        }
        getAlbumData()
    }, [])


    const setAlbumData = (data) => {
        dispatch(addAlbumData(data))
    }


    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }



      function PlaySound(caminho) {
        var path = caminho
        var snd = new Audio(path);
        snd.play();
    }



    return (
        <div>
            <img src={albumCover} className="albumImage" alt="album Detail Cover" />

            {albumTracks.map(request => (
                <div >
                    <h5>{request.name}</h5>
                    <h5>{millisToMinutesAndSeconds(request.duration_ms)}</h5>
                    <h5>{request.preview_url}</h5>
                    <button onclick={`PlaySound(${request.preview_url})` } > button1</button>
                </div>
            )

            )}


        </div>
    )
}

export default AlbunDetails



