import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/photo">All of the Photos!</NavLink>
      <NavLink to="/add-photo">Add Photo</NavLink>
    </nav>
  )
}
