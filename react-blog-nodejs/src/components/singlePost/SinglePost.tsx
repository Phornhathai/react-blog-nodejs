import './singlepost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
                <h1 className='singlePostTitle'>
                    Lorem Ipsum is simply dummy text
                    <div className="singlePostEdit">
                        <FontAwesomeIcon icon={faPenToSquare} className='singlePostIcon' />
                        <FontAwesomeIcon icon={faTrashCan} className='singlePostIcon' />
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Aum</b></span>
                    <span className='singlePostAuthor'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </p>
            </div>
        </div>
    )
}
