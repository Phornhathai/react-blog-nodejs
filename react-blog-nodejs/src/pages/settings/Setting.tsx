import Sidebar from '../../components/sidebar/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './setting.css'

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingsUpdateTitle">
            Update Your Account
          </span>
          <span className="settingsDeleteTitle">
            Delete Your Account
          </span>
        </div>
        <form className='settingForm'>
          <label>
            Profile Picture
          </label>
          <div className="settingPP">
            <img src="https://images.pexels.com/photos/19138147/pexels-photo-19138147.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            <label htmlFor="fileInput">
            <FontAwesomeIcon icon={faUser} className='settingPPIcon' />
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder='Aum' />
          <label>Email</label>
          <input type="email" placeholder='aum@gmail.com' />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
          
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
