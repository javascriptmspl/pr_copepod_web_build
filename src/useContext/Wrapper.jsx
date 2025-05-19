import React, { useState,useEffect } from "react";
import MyContext from "./Context";

const Wrapper = ({ children }) => {
  const userData=JSON.parse(localStorage.getItem("LoginUser"));
  const [edituseData, setEdituserData] = useState({});
  const [editindex, setEditindex] = useState(null);
  const [userdata, setUserData] = useState([
    {
      "name":  userData?.Name || "Admin",
      "image":"1",
    }
  ]);
 


  function addNewEntry(data) {
    if (editindex === null) {
      setUserData([...userdata, data]);
    } else {
      const updatedData = [...userdata];
      updatedData[editindex] = data; 
      setUserData(updatedData);
      setEditindex(null);
    }
  }
 
  // const editfunction = (index) => {
    
  //   setEditindex(index);
    
  //   setEdituserData(userdata[index]);
 
  // };
  const editfunction = (index) => {
    setEditindex(index);
    const editdata = userdata[index];
    setEdituserData(editdata);
    console.log(editdata, "====edit");
  };




  return (
    <MyContext.Provider
      value={{
        userdata,
        addNewEntry,
        editfunction,
        setEdituserData,
        edituseData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Wrapper;
