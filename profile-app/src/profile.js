import React from 'react'
import './profile.css';

function  Profile(props) {
  return (
    <>
    <div className='info'>
    <p>{props.id}</p>
    <ul>
    <li>{props.title}</li>
    <li>{props.firstName}</li>
    <li>{props.lastName}</li>
    </ul>
    </div>
    
    </>
  )
}

export default Profile