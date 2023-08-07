import { useState, useEffect } from 'react';
import { getPhoto, deletePhoto } from '../services/photos.js';
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function DetailPhoto() {
  const [photo, setPhoto] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()

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
      <div>
        <button>
          <Link to={`/photo/${photo._id}/edit`}>
            Edit Photo
          </Link>
        </button>
        <button onClick={() => {
          deletePhoto(photo._id)
          navigate("/photo", { replace: true })
        }}>Delete Photo</button>
      </div>
    </div>
  )
}
