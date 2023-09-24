//import logo from './logo.svg';
//import './App.css';

import { useEffect, useState } from "react";
import Player from "./component/Player";

function App() {

  const [songs] = useState([
    {
      title: "Barso Re",
      artist:"A.R. Rehman",
      img_src:"./images/barso.jpg",
      src:"./songs/Barso Re [320 kbps].mp3"
    },
    {
      title: "Tum Tum",
      artist:"Shri Vardhini",
      img_src:"./images/tumtum.jpg",
      src:"./songs/Tum-Tum.mp3"
    },
    {
      title: "Chogada Tara",
      artist:"Darshan Raval",
      img_src:"./images/tara.jpg",
      src:"./songs/Chogada.mp3"
    },
    {
      title: "Malang Sajna",
      artist:"Sachet Tondon",
      img_src:"./images/malang.jpg",
      src:"./songs/Malang Sajna.mp3"
    }

  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex + 1 > songs.length - 1){
        return 0
      }else {
        return currentSongIndex + 1
      }
    
  })

}, [currentSongIndex, songs.length])
  
  return (
    <div className="App">
      <Player 
      currentSongIndex ={currentSongIndex}
      setCurrentSongIndex = {setCurrentSongIndex}
      nextSongIndex = {nextSongIndex}
      songs = {songs}
      ></Player>
    </div>
  );
}

export default App;
