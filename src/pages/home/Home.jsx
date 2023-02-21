import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostShare from '../../components/PostShare/PostShare'
import './Home.css'
import RightSide from '../../components/RightSide/RightSide'
const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
        <div className="postside">Posts</div>
        <div className="rightside">Rightside</div>
    </div>
  )
}

export default Home

