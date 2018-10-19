import React from 'react';
import axios from 'axios';

export default ()=>{
  const axiosForPHP = axios.create({
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  });
  return axiosForPHP;
};