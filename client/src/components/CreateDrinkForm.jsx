import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from "react";
import axios from 'axios';
import "./CreateDrinkFormStyles.css";


function CreateDrinkForm() {
  const [drinkData, setDrinkData] = useState({
    drinkName: '',
    instructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDrinkData({ ...drinkData, [name]: value });
  };

  const resetDrinkData = () => {
    setDrinkData({drinkName: '',
    instructions: ''})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform Submit logic here with drinkData
    console.log('Drink data:', drinkData);
    try {
      axios.post("/CreateDrinkFormSubmit", {drinkData})
        .then(res => {
          console.log(res.data);
          resetDrinkData()
        })
    } catch (error) {
      console.error(error.message);
    }

  };

  return <div className='CreateDrinkForm-body'>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Drink Name"
        variant="outlined"
        fullWidth
        name="drinkName"
        value={drinkData.drinkName}
        onChange={handleChange}
        required
      />
       <TextField
          id="outlined-multiline-static"
          label="Drink Instructions"
          name="instructions"
          multiline
          rows={4}
          value={drinkData.instructions}
          onChange={handleChange}
        />
      <Button type="submit" variant="contained" color="primary">
        Submit Drink
      </Button>
    </form>
  </ div>
}

export default CreateDrinkForm