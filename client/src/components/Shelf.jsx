import React, { useEffect, useState } from "react";
import axios from 'axios';

const Shelf= () => {
  const [bottlesArray, setBottlesArray] = useState([])
  const [softDrinkArray, setSoftDrinkArray] = useState([])
  const [freshIngArray, setFreshIngArray] = useState([])
  const [ingredients, setIngredients] = useState([])

  return <>
    This is Shelf
    {ingredients?.map((ing, i) => {
      return <p key={i}>{ing}</p>
    })}
  </>

}


export default Shelf