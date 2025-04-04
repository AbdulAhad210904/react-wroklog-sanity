"use client"
import { Link } from "react-router-dom"

function ProfileCard({ member }) {
  return (
    <Link to={`/${member.slug}`} className="profile-card">
      <div className="profile-image">
        {member.image ? <img src={member.image || "/placeholder.svg"} alt={member.name} /> : <span>bilde</span>}
      </div>
      <h2 className="profile-name">{member.name}</h2>
      <a href={`mailto:${member.email}`} className="profile-email" onClick={(e) => e.stopPropagation()}>
        {member.email}
      </a>
    </Link>
  )
}

export default ProfileCard