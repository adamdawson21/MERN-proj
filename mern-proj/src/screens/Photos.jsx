import Photo from '../components/Photo.jsx'
import { useState, useEffect } from 'react'
import { getPhotos } from '../services/photos.js'

export default function Photos() {
  const [photos, setPhotos] = useState([])

  const fetchPhotos = async () => {
    const allPhotos = await getPhotos()
    setPhotos(allPhotos)
  }

  useEffect(() => {
    fetchPhotos()
  }, [])

  return (
    <div>
      <h1>Photos</h1>
      {
        photos.map((photo) => (
          <Photo key={photo._id} photo={photo} />
        ))
      }
    </div>
  )
}
