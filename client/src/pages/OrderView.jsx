import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const OrderView= () => {
  const [drinkQueue, setDrinkQueue] = useState([])
  const [drinkList, setDrinkList] = useState([])
  const [name, setName] = useState("")
  const [drink, setDrink] = useState("")

  useEffect(() => {
    setDrinkQueue(exampleDataJSON.orders)
  }, [drinkQueue]);

  useEffect(() => {
    setDrinkList(exampleDrinkList.drinks)
  }, [drinkList]);

  const enterName = (e) => {
    const { value } = e.target;
    setName(value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform Submit logic here with drinkData
    console.log('name:', name);
    console.log('drink:', drink);
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
                <FormControlLabel value={drink.drink} control={<Radio required={true} />} label={drink.drink} />
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

let exampleDrinkList= {
  "drinks":[
    {
      "drink": "mojito",
      "subtext": "minty fresh rum"
    },
    {
      "drink": "whiskey sour",
      "subtext": "Drink whiskey, but its tasty"
    },
    {
      "drink": "manhatan",
      "subtext": "put some hair on your chest"
    },
    {
      "drink": "gin fizz",
      "subtext": "hurt my arm"
    },
    {
      "drink": "marg",
      "subtext": "tequilla and lime"
    },
    {
      "drink": "vodka cran",
      "subtext": "vodka + cran"
  },
  ]
}

let exampleDataJSON = {
  "orders":[
     {
        "drink":"mojito",
        "name":"Gilbert",
        "time":"7:50"
     },
     {
        "drink":"whiskey sour",
        "name":"Zel",
        "time":"7:51"
     }
    ]
}


export default OrderView
