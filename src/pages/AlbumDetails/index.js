import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Player from './PlayButton'
import { Link } from 'react-router-dom'

import searchApi from '../../services/searchApi'

import './albumDetails.css'

function addAlbumData(data) {
    return { type: 'SET_ALBUM_DATA', data }
}


function AlbunDetails() {
    const dispatch = useDispatch();


    const token = window.localStorage.getItem('spotifyToken')
    const albumData = useSelector(state => state.albumData.data)
    const albumCover = (albumData.data ? albumData.data.images[1].url : "")
    const albumTracks = (albumData.data ? albumData.data.tracks.items : [])
    const albumName = (albumData.data ? albumData.data.name : "")
    const albumArtists = (albumData.data ? albumData.data.artists[0].name : "")
    // const albumPreviews = (albumData.data ? albumData.data.tracks.items.preview_url : [])

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


    return (
        <>
            <Link to={"/"}>
                <div className="returnFromAlbumDetails"> &#60; Voltar</div>
            </Link>
            <div className="albumDetails">
                <div className="albumCoverDetails">
                    <img src={albumCover} className="albumDetailImage" alt="album Detail Cover" />
                    <h3>{albumName}</h3>
                    <h4>{albumArtists}</h4>
                </div>
                <div className="albumDetailTracksWrapper" >
                    {albumTracks.map(request => (
                        <div key={request.track_number} >
                            <Player t_number={request.track_number} url={request.preview_url} name={request.name} duration={millisToMinutesAndSeconds(request.duration_ms)}></Player>
                        </div>
                    )

                    )}
                </div>


            </div>
        </>
    )
}

export default AlbunDetails



