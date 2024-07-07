import React, { useEffect, useState } from "react";
import axios from 'axios';

const Shelf= () => {
  const [bottlesArray, setBottlesArray] = useState([])
  const [softDrinkArray, setSoftDrinkArray] = useState([])
  const [freshIngArray, setFreshIngArray] = useState([])
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    const fetchShelf = async () => {
      try {
        axios.post("/shelf", {username: "0"})
          .then(res => {
            setIngredients(res.data.ingredients)
          })
      } catch (error) {
        console.error(error.message);
      }
      };
    fetchShelf();
  }, [])

  return <>
    This is Shelf
    {ingredients?.map((ing, i) => {
      return <p key={i}>{ing}</p>
    })}
  </>

}


export default Shelf