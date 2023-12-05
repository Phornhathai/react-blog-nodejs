import './write.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImg' src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      <form className='writeForm'>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <FontAwesomeIcon icon={faCirclePlus} className='writeIcon'/>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder='Tell your story...' className='writeInput writeText' typeof='text'></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
