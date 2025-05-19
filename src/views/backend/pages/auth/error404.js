import React from 'react';
import { Link } from "react-router-dom";
import "./error.css"
import { useHistory } from 'react-router-dom'; 


// import cup from "./images/cup.svg"
// import cat from "./images/cat.svg"

const Error404 = () => {

  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/'); 
  };

  return (
    <>
 <div id="background"></div>
<div class="top1">
  <h1 class="h11">404</h1>
  <h3 class="h33">page not found</h3>
</div>
<div class="container1">
  <div class="ghost-copy">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
  </div>
  <div class="ghost">
    <div class="face">
      <div class="eye"></div>
      <div class="eye-right"></div>
      <div class="mouth"></div>
    </div>
  </div>
  <div class="shadow"></div>
</div>
<div class="bottom1">
  <p class="text12">Boo, looks like a ghost stole this page!</p>
 
  <div class="buttons1">

    
    <button class="btn1" onClick={handleHomeClick}>Home</button>
  </div>
</div>




    </>
  );
}

export default Error404;
