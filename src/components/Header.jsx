import { Link } from "react-router-dom"

function Header({ members }) {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          TEAM X
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">
            Hjem
          </Link>
          <div className="divider"></div>
          {members.map((member) => (
            <Link key={member._id} to={`/${member.slug}`} className="nav-link">
              {member.firstName}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header