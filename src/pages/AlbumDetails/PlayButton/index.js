import React, { useState, useEffect } from "react";
import './playButton.css'

const useAudio = (url, name) => {
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  // const [namea, setName] = useState(name);
  console.log(audio)

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

  return [playing, toggle];
};


// function starttime()
//  {
//   var t = new Date();
//   // var seconds = Math.floor( (t/1000) % 60 );
//   t.setSeconds( t.getSeconds() + 30 );
//   console.log(t.getSeconds)
//  }
//  starttime()



const Player = ({ url, name, duration,t_number }) => {
  // console.log(url)
  const [playing, toggle] = useAudio(url);

  return (
    <div onClick={toggle}>
      <div className="trackNameContainer">
      <h5>{t_number}. </h5>
      <h4 className="trackName">{name}</h4>
      <h5 className="trackDuration">{duration}</h5>
      </div>
      <div  className={playing ? "trackFillPlaying" : "trackFillNotPlaying"}></div>
      {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
    </div>
  );
};

export default Player;