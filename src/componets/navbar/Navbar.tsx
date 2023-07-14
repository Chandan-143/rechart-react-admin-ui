
import './navebar.scss'
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>lamadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/b6edf1ba4a354f94bce8f66441a662ce.jpeg" alt="" />
          <span>Chandan</span>

        </div>

        <img src="/setting.svg" alt="" className="icon" />
      </div>
    </div>
  )
}
