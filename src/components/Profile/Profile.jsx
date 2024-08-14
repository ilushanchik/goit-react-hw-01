import React from 'react'
import css from "./Profile.module.css"


const Profile = ({name, tag, location, image, stats}) => { 
  return (
   <div className= {css.profileContainer}>
   <div className= {css.profileDataContainer}>
     <img className= {css.profileAvatar}
       src={image}
       alt="User avatar"
       width={72}
     />
     <p className= {css.profileName}>{name}</p>
     <p className= {css.profileDescribe}>@{tag}</p>
     <p className= {css.profileDescribe}>{location}</p>
   </div>

   <ul className= {css.profileList}>
     <li className= {css.profileItem}>
       <span className= {css.label}>Followers</span>
       <span className= {css.quantity}>{stats.followers}</span>
     </li>
     <li className= {css.profileItem}>
       <span className= {css.label}>Views</span>
       <span className= {css.quantity}>{stats.views}</span>
     </li>
     <li className= {css.profileItem}>
       <span className= {css.label}>Likes</span>
       <span className= {css.quantity}>{stats.likes}</span>
     </li>
   </ul>
 </div>
  )
}

export default Profile