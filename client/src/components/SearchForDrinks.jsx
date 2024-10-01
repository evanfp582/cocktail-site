import React, {useState, useEffect } from 'react'


const SearchForDrinks = () => {

 const [searchInput, setSearchInput] = useState("");
 const [matching, setMatching] = useState([]); 
 const [drinks, setDrinks] = useState([]);

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};


return <div>
    <input
      type="search"
      placeholder="Enter Cocktail"
      onChange={handleChange}
      value={searchInput} />

    <table>
      <tbody>
        <tr>
          <th>Drink Name</th>
          <th>Description</th>
        </tr>
      </tbody>

    {matching.map((drink, index) => {

    return <tbody key={index}>
      <tr>
        <td>{drink.name}</td>
        <td>{drink.description}</td>
      </tr>
    </tbody>
    })}
    </table>
  </div>
};

export default SearchForDrinks;