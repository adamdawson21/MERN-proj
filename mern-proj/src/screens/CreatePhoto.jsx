import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPhoto } from '../services/photos.js'

export default function CreatePhoto() {
  const [photo, setPhoto] = useState({
    full_name: "",
    earth_date: "",
    rover_name: "",

  })

  return (
    <div>CreatePhoto</div>
  )
}

