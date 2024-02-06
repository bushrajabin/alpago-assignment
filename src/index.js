import { createRoot } from "react-dom/client";
import App from "./App";
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';

import "./index.css";
const root_Element = document.getElementById("root");
const root = createRoot(root_Element);
root.render(

    <App />

 
 );
