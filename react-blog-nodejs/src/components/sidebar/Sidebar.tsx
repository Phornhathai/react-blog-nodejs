import './sidbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquarePinterest } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/3811074/pexels-photo-3811074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </p>

      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">
          CATEGORIES
        </span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            Life
          </li>
          <li className="sidebarListItem">
            Music
          </li>
          <li className="sidebarListItem">
            Style
          </li>
          <li className="sidebarListItem">
            Sport
          </li>
          <li className="sidebarListItem">
            Tech
          </li>
          <li className="sidebarListItem">
            Cinema
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">
          FOLLOW US
        </span>
        <div className="sidebarSocial">
          <div className="topLeft">
            <FontAwesomeIcon icon={faSquareFacebook} className="sidebarIcon" />
            <FontAwesomeIcon icon={faSquareTwitter} className="sidebarIcon" />
            <FontAwesomeIcon icon={faSquarePinterest} className="sidebarIcon" />
            <FontAwesomeIcon icon={faSquareInstagram} className="sidebarIcon" />
          </div>
        </div>
      </div>
    </div>
  )
}
