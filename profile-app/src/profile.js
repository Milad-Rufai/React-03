import React from 'react'
import './Profile.css';
import { Users } from './Users'
import(Users)



const Profile = () => {
    const objlog = Users.map((Users) => {
        return <li className='item'>
            <div>
            <img src={Users.picture} alt='1'></img>
            </div>
            <div>
            <p className='' >{Users.id}</p>
            <p className='info-name'>{Users.title} {Users.firstName} {Users.lastName}</p>
            </div>
        </li>
    
    })
    return (
        <div className='info'>
            <ul>
                {objlog}
            </ul>
        </div>
    )
}


// const Use = () => {
//     const ms = Users.filter((called) => called.title === "ms")
//     console.log(ms)

//     const objlog = ms.map((ms) => {
//         return <li>
//             <img src={ms.picture} alt='1'></img>
//             <p>{ms.id}</p>
//             <p>{ms.title} {ms.firstName} {ms.lastName}</p>
//         </li>
//     })
//     return (
//         <div>
//             <ul>
//                 {objlog}
//             </ul>
//         </div>
//     )
// }

export default Profile