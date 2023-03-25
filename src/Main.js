import React from 'react'
import Graph from './Graph'
import Form from './Form'
import {useEffect,useState} from 'react';
import {getAccessToken,getSongIdByName,getReccomendedSongs,getTrackById} from './Spotify'
import { NodePage } from './NodePage';
import {InputPage} from './InputPage';

const Main = () => {
  const [connectedSongs,setConnectedSongs] = useState([]);
  const [rootSong,setRootSong] = useState('');
  const [song,setSong] = useState('');
  const [clicked,setClicked] = useState(0);
  const [clickedSong,setClickedSong] = useState(); 
  const [expand,setExpand] = useState(false);
  const [BFSFind,setBFSFind] = useState(false);
  const [data,setData] = useState();
  const [counter,setCounter] = useState(0);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const code = urlSearchParams.get('code');
    //console.log("Code: " + code)
    if (code) {
      //console.log('hello')
      getAccessToken(code).then((accessToken) => {
        // Store the access token in local storage or state
        localStorage.setItem('accessToken', accessToken);
        //console.log("Access Token: " + accessToken);
      });
    }

  }, []);

  const onGenerate = async (songName) => {
    setSong(songName);
    getSongIdByName(songName)
    .then(async (songId) => {
      const root = await getTrackById(songId);
      setRootSong(root);
      return songId;
    })
    .then(async (songId) => {
      const connectedSongs = await getReccomendedSongs(songId);
      console.log(connectedSongs);
      setConnectedSongs(connectedSongs);
      
      return songId;
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  }

  const dfs = () => {
    //console.log("hello");
    setClicked(clicked + 1);
  }

  const handleClickBFSFind = () => {
    console.log("Setting BFSFind to True");
    setBFSFind(true);  
  }
  const handleExpand = () => {
     setExpand(true);
  }
  return (
    <>
     
      <div style={{display: 'flex'}}>
        <InputPage onGenerate={onGenerate} handleClickBFSFind={handleClickBFSFind}/>
        <Graph counter={counter} setCounter={setCounter} data={data} setData={setData} BFSFind={BFSFind} setBFSFind={setBFSFind} expand={expand} setExpand={setExpand} song={song} rootSong={rootSong} connectedSongs={connectedSongs} clicked={clicked} clickedSong={clickedSong} setClickedSong={setClickedSong}/>
        <NodePage handleExpand={handleExpand} clickedSong={clickedSong}/>
      </div>
      <button onClick={dfs}>BFS</button>
    </>
  )
}

export default Main;