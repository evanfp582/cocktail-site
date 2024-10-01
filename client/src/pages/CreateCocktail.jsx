import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

const OrderView= () => {
  const [drinkQueue, setDrinkQueue] = useState([])
  const [drinkList, setDrinkList] = useState([])
  const [name, setName] = useState("")
  const [drink, setDrink] = useState("")
  const [ingredients, setIngredients] = useState([])


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
    console.log('name:', name);
    console.log('drink:', drink);
  };

  return <>
    <header className="App-header">
        <h1 className="App-title"> Drink Order</h1>
    </header>
    <div className="App-body">
      <h1>This is the Drink Ordering</h1>
      <form>
        <Stack spacing={3}>
          <TextField required id="outlined-basic" label="Name of Drink" variant="outlined" />
          <TextField
            required
            id="outlined-multiline-flexible"
            label="Description"
            multiline
          />
          <Box sx={{ border: 1 }}>
            Test
          </Box>
          <Button variant="outlined" startIcon={<AddIcon />}>
            Add Ingredient
          </Button>
          <TextField
            required
            id="outlined-multiline-flexible"
            label="Instructions"
            multiline
          />
          <Button variant="contained" endIcon={<SendIcon />}>
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  </>

}



export default OrderView
