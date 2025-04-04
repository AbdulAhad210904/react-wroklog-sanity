import ProfileCard from "../components/ProfileCard"
import WorkLog from "../components/WorkLog"

function HomePage({ members, logs }) {
  return (
    <main className="main container">
      <h1 className="page-title">Gruppemedlemmer</h1>

      <div className="profile-grid">
        {members.map((member) => (
          <ProfileCard key={member._id} member={member} />
        ))}
      </div>

      <h2 className="section-title">Arbeidslogg</h2>
      <WorkLog logs={logs} />
    </main>
  )
}

export default HomePage

