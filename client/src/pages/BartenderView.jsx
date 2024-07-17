import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const BartenderView= () => {
  const [drinkQueue, setDrinkQueue] = useState([])
  const [selectedDrink, setSelectedDrink] = useState()

  useEffect(() => {
    setDrinkQueue(exampleDataJSON.orders)
  }, [drinkQueue]);

  return <>
    <header className="App-header">
        <h1 className="App-title"> Bartender View</h1>
    </header>
    <div className="App-body">
      <h1>This is the bartender view</h1>
      <Grid container spacing={2}>
      <Grid item xs={6}>
        <Grid container rowSpacing={2} columnSpacing={0}>
          <Grid item xs={12} md={12}>
            <Item><h2>Drink Queue</h2></Item>
          </Grid>

          {drinkQueue.map((order, index) => (
            <>
              <Grid item md={3}>
                <Item><Button style={{maxHeight: '10px'}} onClick={() => {setSelectedDrink(order.drink)}}>
                  {order.drink}
                </Button></Item>
              </Grid>
              <Grid item md={3}>
                <Item>{order.name}</Item>
              </Grid>
              <Grid item md={3}>
                <Item>{order.time}</Item>
              </Grid>
              <Grid item md={3}>
                <Item><IconButton style={{maxHeight: '10px'}} aria-label="delete" disabled color="primary">
                  <DeleteIcon />
                </IconButton></Item>
              </Grid>
            </>
          ))}

          
        </Grid>
      </Grid>
    <Grid item xs={6}>
      <Item>
        <h2>Recipe for Selected Drink</h2>
      </Item>
      <Container>
        {selectedDrink ? selectedDrink : "No Selected Drink"}
      </Container>
    </Grid>
    </Grid>
    </div>
  </>

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


export default BartenderView


// {drinkQueue.map((order) => (
//   <div key={order.name}>
//     <Grid item xs={6} md={4}>
//       <Item>{order.drink}</Item>
//     </Grid>
//     <Grid item xs={6} md={4}>
//       <Item>{order.name}</Item>
//     </Grid>
//     <Grid item xs={6} md={4}>
//       <Item>{order.time}</Item>
//     </Grid>
//   </div>
// ))}