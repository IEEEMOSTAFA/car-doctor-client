import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {

  RouterProvider,
} from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import router from './Routes/Routes.jsx';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <div className="max-w-screen-xl mx-auto">
    <RouterProvider router={router} />
  </div>

);
