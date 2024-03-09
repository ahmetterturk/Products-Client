import axios from 'axios'

export const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3333/products');
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const login = async (email, password) => {
  try {
    const data = {email, password}
    const response = await axios.post('http://localhost:3333/users/login', data);
    return response.data
  } catch (error) {
    console.log(error);
  }
}

