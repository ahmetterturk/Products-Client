import axios from 'axios'

export const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3333/products');
    return response.data
  } catch (error) {
    console.log(error);
  }
}

