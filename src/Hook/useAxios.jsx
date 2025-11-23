import axios from "axios";
const axisonInstance = axios.create({
  baseURL: "https://habit-tarcker-server.vercel.app/",
});
const useAxios = () => {
  return axisonInstance;
};

export default useAxios;
