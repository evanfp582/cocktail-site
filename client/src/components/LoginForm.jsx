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
    password: '',
  });

  const isValidForm = () => {
    return true
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login logic here with loginData
    console.log('Login data:', loginData);
    try {
      axios.post("/Login", {loginData})
        .then(res => {
          console.log(res.data);
        })
    } catch (error) {
      console.error(error.message);
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form-level validation
    if (!isValidForm()) {
      // Display error messages or prevent submission
      return;
    }
    // Submit the form data
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
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        name="password"
        type="password"
        value={loginData.password}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  </ div>
}

export default LoginForm