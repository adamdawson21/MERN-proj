import { useState, useEffect } from 'react';
import { getPhoto } from '../services/photos.js';
import { useParams } from 'react-router-dom';

export default function DetailPhoto() {
  const [photo, setPhoto] = useState({})

  let { id } = useParams()

  const fetchPhoto = async () => {
    const onePhoto = await getPhoto(id)
    setPhoto(onePhoto)
  }

  useEffect(() => {
    fetchPhoto()
  }, [])


  return (
    <div>
      <h1>{photo.full_name}</h1>
      <img src={photo.photo} alt={photo.full_name} />
      <p>{photo.earth_date}</p>
      <p>{photo.rover_name}</p>
    </div>
  )
}
