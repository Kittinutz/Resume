import axios from 'axios'
export const FECTH_GITHUB = 'fetch_github';
export const FETCH_USER = 'fetch_user';
const API = 'https://api.github.com/users/kittinutz/repos';

export    const   fetchgithub =   ()=>{
   return async dispatch=>{
       const response =  await  axios.get(`${API}`);
       dispatch({
           type:FECTH_GITHUB,
           payload : response.data
       })

    }

}

const USER = 'http://localhost:3000/api';

export const fetchUser = ()=>{
  return async dispatch =>{
    const response = await axios.get(`${USER}/user`);
    dispatch({
      type:FETCH_USER,
      payload:response.data
    })
  }
}