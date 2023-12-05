import "./topbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquarePinterest } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function topbar() {
  const user = true
  return (
    <div className="top">
      <div className="topLeft">
        <FontAwesomeIcon icon={faSquareFacebook} className="topIcon" />
        <FontAwesomeIcon icon={faSquareTwitter} className="topIcon" />
        <FontAwesomeIcon icon={faSquarePinterest} className="topIcon" />
        <FontAwesomeIcon icon={faSquareInstagram} className="topIcon" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className="topImg" src="https://images.pexels.com/photos/19225614/pexels-photo-19225614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">Login</Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">Register</Link>
              </li>
            </ul>
          )
        }

        <FontAwesomeIcon icon={faSearch} className="topSearchIcon" />
      </div>
    </div>
  )
}
