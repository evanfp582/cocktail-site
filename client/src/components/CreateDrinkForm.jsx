import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from "react";
import axios from 'axios';
import "./CreateDrinkFormStyles.css";


function CreateDrinkForm() {
  const [drinkData, setDrinkData] = useState({
    drinkName: '',
    instructions: '',
  });
  const [ingredients, setIngredients] = useState([])
  const [selectedIng, setSelectedIng] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDrinkData({ ...drinkData, [name]: value });
  };

  const resetDrinkData = () => {
    setDrinkData({drinkName: '',
    instructions: ''})
  }

  useEffect(() => {
    fetchIng();
  }, [])
  
  const fetchIng = async () => {
    try {
      const response = await fetch("/get_ingredients");
      const ing = await response.json();
      console.log(ing)
      setIngredients(ing);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform Submit logic here with drinkData
    console.log('Drink data:', drinkData);
    // try {
    //   axios.post("/CreateDrinkFormSubmit", {drinkData})
    //     .then(res => {
    //       console.log(res.data);
    //       resetDrinkData()
    //     })
    // } catch (error) {
    //   console.error(error.message);
    // }

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
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedIng}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {ingredients.map((ing) => (
            <MenuItem key={ing.name} value={ing.name}>
              <Checkbox checked={selectedIng.indexOf(ing.name) > -1} />
              <ListItemText primary={ing.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>       
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



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default CreateDrinkForm