import React, { useState } from "react";
import * as S from "./styles";


import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

export default function ZonaMusica( {addSong} ) {
  const [song, setSong] = useState({
    title: "",
    album: "",
    band: "",
  });
  const [error, setError] = useState(null)
  const [expandedNote, setExpandedNote] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target;

    /* setSong(name, value) */
    setSong((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleClick = (e) =>{
    e.preventDefault(); 
    console.log('agregando canción')

    if(!title || !album || !band){
      setError('Debes rellenar todos los campos')
      return
    } else {
      setError(null)
    }

    addSong(song)
    setSong({
      title: "",
      album: "",
      band: ""
    })
  }

  const { title, album, band } = song;
  console.log(song);



  return (
    <div>
      <S.Formulario>
    
        <S.SongTitle
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Song"
          onClick={() => {setExpandedNote(true)}}
        />
  
       
        <S.AlbumContent
          type="text"
          name="album"
          value={album}
          onChange={handleChange}
          placeholder="Album"
          onClick={() => {setExpandedNote(true)}}

        />

        <S.BandContent
          type="text"
          name="band"
          value={band}
          onChange={handleChange}
          placeholder="Band"
          onClick={() => {setExpandedNote(true)}}
      
        />
        <p>{error}</p>
        <Zoom in={expandedNote}>
        <Fab onClick={handleClick}>
          <AddIcon/>
        </Fab>
        </Zoom>
      </S.Formulario>
    </div>
  );
}
