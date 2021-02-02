import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import MyRoute from './MyRoute';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <MyRoute />
  </BrowserRouter>,
  document.getElementById('root')
);

