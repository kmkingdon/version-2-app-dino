import React from 'react';
import ProfileCard from './ProfileCard'

const ProfileList = (props) => {
  const profiles = props.profiles;
  return profiles.map(p => <ProfileCard id="{p.name}" key={p.name} profile={p} handleClick={props.handleClick} /> )
}

export default ProfileList
