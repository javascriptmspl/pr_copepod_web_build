import axios from 'axios';
import { BASE_URL } from '../../../../BaseUrl';
import {MODE_ID, USERID} from '../../../../utils.js';



const token = localStorage.getItem('usertoken')
console.log(token,"tokencheck");
export const createUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/User/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Assuming userData is JSON
      },
      body: JSON.stringify(userData)
    });
  
    const responseData = await response.json();
    if (responseData.error) {
      
      sessionStorage.setItem('singupError',JSON.stringify(responseData.error))
      
    } 

  
    return responseData;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.log("Bad Request: Invalid data sent to the server.");
  } else if (error.response && error.response.status === 401) {
      console.log("Unauthorized: User is not authenticated.");
  } else if (error.response && error.response.status === 500) {
      console.log("Internal Server Error: Something went wrong on the server.");
  } else {
      console.log("Server Error: An error occurred on the server side.");
  }
  }
};




export const UpdateUser = async (userData) => {

  const {value,userID} = userData
  try {
    const response = await fetch(`${BASE_URL}User/update/${userID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify(value)
    });
  
    const responseData = await response.json();

    if (responseData) {
      localStorage.setItem("usertoken", responseData.data.token)
      localStorage.setItem("LoginUser", JSON.stringify(responseData.data));
       }
    if (responseData.error) {
      
      sessionStorage.setItem('singupError',JSON.stringify(responseData.error))
      
    } 

  
    return responseData;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.log("Bad Request: Invalid data sent to the server.");
  } else if (error.response && error.response.status === 401) {
      console.log("Unauthorized: User is not authenticated.");
  } else if (error.response && error.response.status === 500) {
      console.log("Internal Server Error: Something went wrong on the server.");
  } else {
      console.log("Server Error: An error occurred on the server side.");
  }
  }
};



export const userLogin = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/User/login`, credentials);
    
    if (response) {
    localStorage.setItem("usertoken", response.data.token)
    localStorage.setItem("LoginUser", JSON.stringify(response.data));
 
    }

    return response.data;

  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.log("Bad Request: Invalid login credentials.");
    } else if (error.response && error.response.status === 401) {
      console.log("Unauthorized: Invalid credentials or user not authenticated.");
    } else if (error.response && error.response.status === 500) {
      console.log("Internal Server Error: Something went wrong on the server.");
    } else {
      console.log("Server Error: An error occurred on the server side.");
    }
  }
}

export const userLoginPhone = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/User/loginwithPhoneNumberAndPassword`, credentials);
    
    if (response) {
      localStorage.setItem("usertoken", response.data.token)
    localStorage.setItem("LoginUser", JSON.stringify(response.data));
 
    }

    return response.data;

  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.log("Bad Request: Invalid login credentials.");
    } else if (error.response && error.response.status === 401) {
      console.log("Unauthorized: Invalid credentials or user not authenticated.");
    } else if (error.response && error.response.status === 500) {
      console.log("Internal Server Error: Something went wrong on the server.");
    } else {
      console.log("Server Error: An error occurred on the server side.");
    }
  }
}

export const forgotPassword = async (data) => {
  localStorage.setItem('forgetemail',data?.email)
  try {
    const response = await axios.post(`${BASE_URL}/User/forgot-password`,data );
    localStorage.setItem("usertoken", response?.data?.token);
    return response.data;

  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.log("Bad Request: Invalid email.");
    } else if (error.response && error.response.status === 401) {
      console.log("Unauthorized: User is not authenticated.");
    } else if (error.response && error.response.status === 500) {
      console.log("Internal Server Error: Something went wrong on the server.");
    } else {
      console.log("Server Error: An error occurred on the server side.");
    }
  }
};




export const verifyOTP = async (otpData) => {
  try {
    // Make an API request to verify the OTP
    const token = localStorage.getItem('usertoken')
    
   const  data={
      otp:otpData,
      token:token
    }
    const response = await axios.post(`${BASE_URL}/User/verifyOTP`, data)
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.log("Bad Request: Invalid OTP or data.");
    } else if (error.response && error.response.status === 401) {
      console.log("Unauthorized: Invalid credentials or user not authenticated.");
    } else if (error.response && error.response.status === 500) {
      console.log("Internal Server Error: Something went wrong on the server.");
    } else {
      console.log("Server Error: An error occurred on the server side.");
    }
  }
};


export const resetPassword = async (passwordData) => {
  try {

    const resetdata={
      email:localStorage.getItem('forgetemail'),
      newPassword:passwordData
    }
    const token = localStorage.getItem('usertoken');
    const response = await axios.post(`${BASE_URL}/User/resetPassword`, resetdata, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getByIdUser=async(data)=>{
  
  const option={
   headers: {
      
       'x-access-token': token
     }
  }
   try {
       const response = await axios.get(`${BASE_URL}User/getById/${data}`,option)
 
     
       return response.data.data
   } catch (error) {
     console.error(error) 
     throw error;   
   }
}


export const userProfileGetAll = async (data) => {
const option={
  headers:{
    'x-access-token':token
  }
}
try{
  const response= await axios.get(`${BASE_URL}/user-profile/getall${data}`,option)
  return response.data.data
}catch (error){
  console.error(error)
  throw error;
}
};



// ----------------------THIS IS FOR SUBUSER MAKING API'S ------------------------------//

export const CreateSubUser = async (data) => {
  console.log("data api")

  const {value}=data
  const option={
    headers:{
      'x-access-token':token
    }
  }
  try{
    const response= await axios.post(`${BASE_URL}user-profile/createUser`,value)
    return response.data.data
  }catch (error){
    console.error(error)
    throw error;
  }
  };

  export const GetAllUserId = async (data) => {
    const option={
      headers:{
        'x-access-token':token
      }
    }
    try{
      const response= await axios.get(`${BASE_URL}user-profile/getall/${MODE_ID}?page_no=1&page_size=112`,)
      return response.data.data
    }catch (error){
      console.error(error)
      throw error;
    }
    };




  export const GetSubUserById = async (data) => {
   

    const {id}=data

    const option={
      headers:{
        'x-access-token':token
      }
    }
    try{
      const response= await axios.get(`${BASE_URL}user-profile/getUserProfile/${id}?page_no=1&page_size=112`,option)
      return response.data.data
    }catch (error){
      console.error(error)
      throw error;
    }
    };


  export const GetAllSubUser = async (data) => {
  
    const option={
      headers:{
        'x-access-token':token
      }
    }
    try{
      const response= await axios.get(`${BASE_URL}user-profile/getallByUserId/${USERID}?page_no=1&page_size=112`,data)
      return response.data.data
    }catch (error){
      console.error(error)
      throw error;
    }
    };


    export const UpdateSubUser =async(data)=> {
      
      const {value,userID}=data
      const option ={
        header:{
          'x-access-token': token
        }
      }
      try{
        const response =await axios.put(`${BASE_URL}user-profile/updateUserProfile/${userID}`,value,option)
        return response.data.data
    }catch (error){
      console.error(error)
      throw error;
    }
    };

    export const UpdateSubUserProfile =async(data)=> {
      const {value,userID}=data
      const option ={
        header:{
          'x-access-token': token
        }
      }
      try{
        const response =await axios.put(`${BASE_URL}user-profile/uploadUserProfile/${userID}`,value,option)
        return response.data.data
    }catch (error){
      console.error(error)
      throw error;
    }
    };


    export const DeleteSubUser = async (data) => {
      const { id,token } = data; 
      const options = {
          headers: {
              'x-access-token': token
          }
      };
    
      try {
          const response = await axios.delete(`${BASE_URL}user-profile/deleteUserProfile/${id}`,options);
          return response.data.data;
      } catch (error) {
          console.error(error);
          throw error;
      }
  };

  // export const   
  

// ---------------get content --------------------

