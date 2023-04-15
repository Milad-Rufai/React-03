import React from 'react'
import './Profile.css';
import { Users } from './Users'
import(Users)



const Use = () => {
    const itemlog = Users.map((Users) => {
        return <li className='item'>
            <div>
            <img src={Users.picture} alt='1'></img>
            </div>
            <div>
            <p>{Users.id}</p>
            <p>{Users.title} {Users.firstName} {Users.lastName}</p>
            </div>
        </li>
    
    })
    return (
        <div className='info'>
            <ul>
                {itemlog}
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

export default Use