import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import axios from 'axios';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const SearchView= () => {
  const [drinkList, setDrinkList] = useState([])


  return <>
    <header className="App-header">
        <h1 className="App-title"> Search View</h1>
    </header>
    <div className="App-body">
      <h1>This is the Search view</h1>
    </div>
  </>

}

export default SearchView
