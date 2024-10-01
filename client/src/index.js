import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import BartenderView from "./pages/BartenderView"
import OrderView from "./pages/OrderView"
import CreateCocktail from "./pages/CreateCocktail"
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if (process.env.NODE_END === 'production') disableReactDevTools()

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/BartenderView" element={<BartenderView />} />
        <Route path="/OrderView" element={<OrderView />} />
        <Route path="/CreateCocktail" element={<CreateCocktail />} />
        <Route path="*" element={<h1>404 No Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
