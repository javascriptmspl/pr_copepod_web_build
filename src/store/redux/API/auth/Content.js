import axios from 'axios';
import { BASE_URL } from '../../../../BaseUrl';
import {MODE_ID, USERID} from '../../../../utils.js';

const token = localStorage.getItem('usertoken')
console.log(token,"tokencheck");


export const GetContent = async (data) => {
  
    const option={
      headers:{
        'x-access-token':token
      }
    }
    try{
      const response= await axios.get(`${BASE_URL}Content/getall/${MODE_ID}?page_no=1&page_size=112`,data)
      return response.data.data
    }catch (error){
      console.error(error)
      throw error;
    }
    };