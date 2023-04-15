import React from 'react'
import './Search.css';
import { useState } from 'react';
import { Users } from './Users'
import(Users)



function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = Users.filter((itemlog) =>
    itemlog.firstName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <input className='search-box' type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
      <ul>
      {filteredData.map((itemlog) => (
          <li key={itemlog.firstName}>{itemlog.firstName}</li>
        ))}
      </ul>
    </div>
  );
}
export default Search