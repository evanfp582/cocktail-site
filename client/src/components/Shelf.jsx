import React, { useEffect, useState } from "react";
import axios from 'axios';

const Shelf= () => {
  const [bottlesArray, setBottlesArray] = useState([])
  const [softDrinkArray, setSoftDrinkArray] = useState([])
  const [freshIngArray, setFreshIngArray] = useState([])

  useEffect(() => {
    const fetchShelf = async () => {
      try {
        axios.post("/shelf", {username: "userID"})
          .then(res => {
            console.log(res.data);
          })
      } catch (error) {
        console.error(error.message);
      }
      };
    fetchShelf();
  }, [])

  return <>This is Shelf</>

}


export default Shelf