import axios from "axios";

const axiosMordovia = axios.create({
  baseURL: `https://mordovia-russia.ru/backend/api`
})

export { axiosMordovia }