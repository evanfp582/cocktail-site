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

const drinkDataModel = [
  {name: ""}
] 

const OrderView= () => {
  const [drinkList, setDrinkList] = useState([])
  const [name, setName] = useState("")
  const [drink, setDrink] = useState("")

  useEffect(() => {
    // Gets all drinks and sets it to dronkList
    axios.get("http://localhost:5000/cocktails")
      .then(response => {
        setDrinkList(response.data.map(drink => drink.name))
      })
      .catch(error => {
        console.log("Error fetching data: ", error);
        
      })
  }, []);

  const enterName = (e) => {
    // const { value } = e.target;
    // setName(value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform Submit logic here with drinkData
    console.log('name:', name);
    console.log('drink:', drink);

  };

  return <>
    <header className="App-header">
        <h1 className="App-title"> Bartender View</h1>
    </header>
    <div className="App-body">
      <h1>This is the Order view</h1>
      <form>
      <Grid container spacing={2}>
        <Grid item xs={4}> 
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& > :not(style)': { m: 1 },
            }}
          >
            <TextField
              label="Enter Your Name"
              variant="outlined"
              fullWidth
              name="name"
              value={name}
              onChange={enterName}
              required
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <h3>Drink List</h3> 
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              required
            >
              {drinkList.map((drink, index) => (
                <FormControlLabel key={index} value={drink} control={<Radio/>} label={drink} />
              ))}   
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Button type="submit" variant="contained" color="primary">
            Submit Drink
          </Button>
        </Grid>
      </Grid>
      </form>
    </div>
  </>

}

export default OrderView
