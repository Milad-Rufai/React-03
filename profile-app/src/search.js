import React from 'react'
import './Search.css';
import './Profile.css';
import { useState } from 'react';
import { Users } from './Users'



function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = Users.filter((Users) =>
    Users.firstName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <input className='search-box' type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
      <div className='info'>
      <ul>
      {filteredData.map((Users) => {
        return(
        
          <li className='item' key={Users.firstName}>{<><div>
            <img src={Users.picture} alt='1'></img>
            </div>
            <div>
            <p>{Users.id}</p>
            <p>{Users.title} {Users.firstName} {Users.lastName}</p>
            </div></>}</li> )
        })}
      </ul>
    </div>
    </div>
  );
}
export default Search