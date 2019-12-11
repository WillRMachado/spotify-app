import React, { useState, useEffect } from "react";
import './playButton.css'

const useAudio = (url) => {
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  // console.log(audio.src)

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);



  // const myfun = ()=>{
  //   console.log(url)

  // }
  useEffect(() => {
    setAudio(new Audio(url))

    // effect
    // return () => {
    // cleanup
    // };
    // toggle = useAudio(url)
    // console.log("will")

    // myfun()
  }, [url])


  return [playing, toggle];
};



const Player = ({ url, name, duration, t_number }) => {
  // console.log(url)
  const [playing, toggle] = useAudio(url);

  return (
    <div onClick={toggle}>
      <div className="trackNameContainer">
        <h5>{t_number}. </h5>
        <h4 className="trackName">{name}</h4>
        <h5 className="trackDuration">{duration}</h5>
      </div>
      <div className={playing ? "trackFillPlaying" : "trackFillNotPlaying"}></div>
    </div>
  );
};

export default Player;