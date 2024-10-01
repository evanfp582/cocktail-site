import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from "react";
import axios from 'axios';
import "./CreateDrinkFormStyles.css";


function LoginForm() {
  const [loginData, setLoginData] = useState({
    username: '',
  });
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login logic here with loginData
    try {
      axios.post("/Login", {loginData})
        .then(res => {
          setUser(res.data.message[0].name)
        })
    } catch (error) {
      console.error(error.message);
    }

  };

  return <div className='CreateDrinkForm-body'>
    <form onSubmit={handleLogin}>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        name="username"
        value={loginData.username}
        onChange={handleChange}
        required
      />
      { user !== "" ? "You're logged in as " +user : ""}

      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  </ div>
}

export default LoginForm