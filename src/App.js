import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import LayoutsRoute from "./router/layouts-route";
import "react-toastify/dist/ReactToastify.css";

import "./assets/css/bootstrap.min.css";
import "./assets/css/typography.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Error404 from "./views/backend/pages/auth/error404";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
   
  return (
    <div className="App">
       <ToastContainer />
      <LayoutsRoute />
    
    </div>
  );
}

export default App;
