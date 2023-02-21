import React from 'react'
import './FollowersCard.css'
import {Followers} from '../../Data/FollowersData'
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
     

        {Followers.map((follower,id)=>{
            return(
                <div classname="follower">
                    <div>
                        <img src={follower.img} alt=""
                        className="followerImage"/>
                        <div className="name">
                             <span>{follower.name}</span>
                             <span> @{follower.username}</span>
          
                            </div>
                        </div>

                        <button className='button'>
                              Follow
        
                        </button>
                  </div>
            )
         })}
    </div>
  )}

export default FollowersCard


