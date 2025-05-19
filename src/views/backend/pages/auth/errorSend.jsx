import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./error.css"
import { useHistory } from 'react-router-dom'; 


const ErrorSend = () => {



 

  useEffect(() => {
    const link = document.getElementById('errorLink');
    if (link) {
      link.click();
    }
  }, []);

  return (
    <>
      <a id="errorLink" href="/pages" style={{ display: "none" }}></a>
    </>
  );
}

export default ErrorSend;
