import React, {useState} from 'react';
import { MySong, SongTitle, AlbumContent, BandContent, EditInput} from "./style"
import DeleteIcon from '@mui/icons-material/Delete';

export default function Song({id, title, album, band, deleteSong, handleUpdateSong}) {
    const [currentSong, setCurrentSong] = useState({
        id: id,
        editTitle: title,
        editAlbum: album,
        editBand: band
    })

    const [editSong, setEditSong] = useState(false)


const handleDelete = () =>{
deleteSong(id)
}

const handleEdit = () =>{
    setEditSong(true);
    setCurrentSong(prevValue => ({...prevValue}))
}
const handleInputEdit = (e) =>{
    const {name, value} = e.target
    setCurrentSong(prevValue =>({
        ...prevValue,
        [name]: value
    }))
}

const updateSong = () =>{
    handleUpdateSong({
        id: currentSong.id,
        title: currentSong.editTitle,
        album: currentSong.editAlbum,
        band: currentSong.editBand
    })
    setEditSong(false)
}

const {editTitle, editAlbum, editBand} = currentSong

  return (
      <>
      {editSong ? 
      (
        <MySong>
        <EditInput
            type="text"
            name='editTitle'
            value={editTitle}
            onChange={handleInputEdit}
        />
                <EditInput
            type="text"
            name='editAlbum'
            value={editAlbum}
            onChange={handleInputEdit}
        />
                <EditInput
            type="text"
            name='editBand'
            value={editBand}
            onChange={handleInputEdit}
        />
        <button onClick={()=>setEditSong(false)}>Cancel</button>
        <button onClick={updateSong}>Save</button>
        </MySong>
      ) 
      :
      (
        <MySong  onDoubleClick={handleEdit}>
        <SongTitle>{title}</SongTitle>
        <AlbumContent>{album}</AlbumContent>
        <BandContent>{band}</BandContent>
        <DeleteIcon onClick={handleDelete}/>
  
        </MySong>
      )}

</>
  )
}
