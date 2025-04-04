"use client"
import { useParams, Navigate } from "react-router-dom"
import WorkLog from "../components/WorkLog"

function MemberPage({ members, logs }) {
  const { memberSlug } = useParams()

  // Find the member by slug
  const member = members.find((m) => m.slug === memberSlug)

  // If member not found, redirect to home
  if (!member) {
    return <Navigate to="/" />
  }

  return (
    <main className="main container">
      <div className="profile-container">
        <div className="profile-image-large">
          {member.image ? <img src={member.image || "/placeholder.svg"} alt={member.name} /> : <span>bilde</span>}
        </div>

        <div className="profile-details">
          <h1 className="page-title">{member.name}</h1>
          <p className="profile-bio">{member.bio}</p>

          <h2 className="interests-title">Interesser</h2>
          <ul className="interests-list">
            {member.interests &&
              member.interests.map((interest, index) => (
                <li key={index} className="interest-item">
                  <span className="interest-bullet">•</span>
                  {interest}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <h2 className="section-title">Arbeidslogg</h2>
      <WorkLog logs={logs} memberId={member._id} />
    </main>
  )
}

export default MemberPage

