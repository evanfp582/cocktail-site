import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';
import Footer from "./components/Footer";
import { Outlet, Link } from "react-router-dom";import CreateDrinkForm from "./components/CreateDrinkForm";
import SearchForDrinks from "./components/SearchForDrinks";
import LoginForm from "./components/LoginForm";
import Shelf from "./components/Shelf";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <li><Link to="/BartenderView">Bartender</Link></li>
        <li><Link to="OrderView">Order</Link></li>
        <li><Link to="/CreateCocktail">Create Cocktail</Link></li>
        <h1 className="App-title"> Cocktail Website</h1>
      </header>
      <div className="App-body">
        <CreateDrinkForm />
        <hr />
        <SearchForDrinks />
        <hr />
        <LoginForm />
        <hr />
        <Shelf />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;