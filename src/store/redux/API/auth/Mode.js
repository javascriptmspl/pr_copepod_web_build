import axios from 'axios';
import { BASE_URL } from '../../../../BaseUrl';

export const createMode = async (ModeData) => {
  try {
    const response = await axios.post(`${BASE_URL}/Modes_Mode/create`, ModeData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.log("Bad Request: Invalid data sent to the server.");
  } else if (error.response && error.response.status === 401) {
      console.log("Unauthorized: Mode is not authenticated.");
  } else if (error.response && error.response.status === 500) {
      console.log("Internal Server Error: Something went wrong on the server.");
  } else {
      console.log("Server Error: An error occurred on the server side.");
  }
  }
};



export const GetAllMode = async () => {
    try {
      const response = await axios.get(`${BASE_URL}modes/getall?page_number=1&page_size=2`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("Bad Request: Invalid data sent to the server.");
    } else if (error.response && error.response.status === 401) {
        console.log("Unauthorized: Mode is not authenticated.");
    } else if (error.response && error.response.status === 500) {
        console.log("Internal Server Error: Something went wrong on the server.");
    } else {
        console.log("Server Error: An error occurred on the server side.");
    }
    }
  };
 