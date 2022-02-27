import React, { useState } from 'react';
import Song from '../Song/Song'
import ZonaMusica from '../ZonaMusica/ZonaMusica';

export default function SongContainer() {
    const [songs, setSongs] = useState([]);

    const addSong = (newSong) =>{
        setSongs((prevSong)=>{
            return [...prevSong, newSong]
        })
    }

    const deleteSong = (id) =>{
        console.log(id)
        setSongs((prevSongs) =>{
            return prevSongs.filter((song, index)=>{
                return index !== id
            })
        })
    }

    const handleUpdateSong = ({id, title, album, band}) => {
     const editedSongs = songs.map((song, index) =>{
            console.log(song)
            if ( index === id) {
                return ({id, title, album, band})
            }else{
                return song
            }
        })
        setSongs(editedSongs)
    }


  return (
    <div>
    <ZonaMusica addSong={addSong}/>
        {songs.map((song, index)=>{
            return(
                <Song
                    key={index}
                    id={index}
                    title={song.title}
                    album={song.album}
                    band={song.band}
                    deleteSong={deleteSong}
                    handleUpdateSong={handleUpdateSong}
                />
            )
        })}
    </div>
  )
}
