import React, {useState, useEffect } from 'react'


const SearchForDrinks = () => {

 const [searchInput, setSearchInput] = useState("");
 const [matching, setMatching] = useState([]); 
 const [drinks, setDrinks] = useState([]);

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

useEffect(() => {
  fetchData();
}, [])

const fetchData = async () => {
  try {
    const response = await fetch("/getAllDrinks");
    const drinks = await response.json();
    console.log(drinks.message)
    setDrinks(drinks.message);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  if (searchInput.length > 0) {
    setMatching(drinks.filter((drink) => {
    return drink.name.match(searchInput);
    }));
  }else {
    setMatching([])
  }
}, [searchInput])

return <div>
    <input
      type="search"
      placeholder="Search here"
      onChange={handleChange}
      value={searchInput} />

    <table>
      <tbody>
        <tr>
          <th>Country</th>
          <th>Continent</th>
        </tr>
      </tbody>

    {matching.map((country, index) => {

    return <tbody key={index}>
      <tr>
        <td>{country.name}</td>
        <td>{country.continent}</td>
      </tr>
    </tbody>
    })}
    </table>
  </div>
};

export default SearchForDrinks;