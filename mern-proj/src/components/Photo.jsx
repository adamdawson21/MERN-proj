import { Link } from "react-router-dom"

export default function Photo({ photo }) {
  return (
    <div>
      <Link to={`/photo/${photo._id}`}>
        <img className="photo-image" src={photo.photo} alt={photo.full_name} />
      </Link>
    </div>
  )
}
