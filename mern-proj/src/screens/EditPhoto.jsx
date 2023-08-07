import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updatePhoto, getPhoto } from '../services/photos'

export default function EditPhoto() {
  const [photo, setPhoto] = useState({
    full_name: "",
    earth_date: "",
    rover_name: "",
    photo: ""
  })

  let navigate = useNavigate()
  let { id } = useParams()

  const fetchPhoto = async () => {
    const onePhoto = await getPhoto(id)
    setPhoto(onePhoto)
  }

  useEffect(() => {
    fetchPhoto()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    setPhoto((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updatePhoto(id, photo)
    navigate(`/photo/${id}`, { replace: true })
  }

  return (
    <div>
      <h1>Create a Space Image!</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your image's name"
          name="full_name"
          value={photo.full_name}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your image's earth date"
          name="earth_date"
          value={photo.earth_date}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your image's rover name"
          name="rover_name"
          value={photo.rover_name}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your image's image"
          name="photo"
          value={photo.photo}
          onChange={handleChange}
        />
        <button type="submit">Make Your Image</button>
      </form>
    </div>
  )
}


