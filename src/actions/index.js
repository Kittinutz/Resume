import axios from 'axios'
export const FECTH_GITHUB = 'fetch_github';
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