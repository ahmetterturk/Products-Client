import axios from 'axios'

export const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3333/products');
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3333/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (id, newData) => {
  try {
    const response = await axios.patch(`http://localhost:3333/products/${id}`, newData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const login = async (email, password) => {
  try {
    const data = {email, password}
    const response = await axios.post('http://localhost:3333/users/login', data);
    return response.data
  } catch (error) {
    console.log(error);
  }
}
