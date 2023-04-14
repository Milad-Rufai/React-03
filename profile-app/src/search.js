import React from 'react'
import './Search.css';
import { useState } from 'react';
import { Users } from './Users'
import(Users)



function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(Users);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.firstName.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div>
      <input className='search-box' type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.firstName}</li>
        ))}
      </ul>
    </div>
  );
}




export default Search