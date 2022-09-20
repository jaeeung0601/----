import React from 'react'
import './assets/Post.css';
import Avatar from '@mui/material/Avatar';

function Post() {
  return (
    <div className='post'>
     <div className='postHeader'>
      <Avatar
      className="postAvatar"
      alt="choijae"
      src="/static/images/avatar/1.png"
      />
    <h3>username</h3>
    </div>
    
    <img className='postImage'  src="https://picsum.photos/320/240?random=5#.YygKSefSkWs.link"
    alt="" />
    {/* image */}

    <h4>Username: caption</h4>
    {/* username -> caption */}

    </div>
  )
}

export default Post