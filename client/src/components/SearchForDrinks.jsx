import React, {useState, useEffect } from 'react'


const SearchForDrinks = () => {

 const [searchInput, setSearchInput] = useState("");
 const [matching, setMatching] = useState([]); 
 const [drinks, setDrinks] = useState([]);

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

// useEffect(() => {
//   fetchData();
// }, [])

// const fetchData = async () => {
//   try {
//     const response = await fetch("/getAllDrinks");
//     const drinks = await response.json();
//     console.log(drinks)
//     setDrinks(drinks.message);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// useEffect(() => {
//   if (searchInput.length > 0) {
//     setMatching(drinks.filter((drink) => {
//       var lowercase = drink.name.toLowerCase()
//     return lowercase.match(searchInput.toLowerCase());
//     }));
//   }else {
//     setMatching([])
//   }
// }, [drinks, searchInput])

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