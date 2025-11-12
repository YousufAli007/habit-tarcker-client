import axios from "axios";
const axisonInstance = axios.create({
  baseURL: "http://localhost:3000/",
})
 const useAxios = () => {
  return axisonInstance;
     
 };
 
 export default useAxios;
 