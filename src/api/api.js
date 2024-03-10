import axios from 'axios'

const backendUrl = 'http://localhost:8080'

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${backendUrl}/products`);
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${backendUrl}/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (newProductData) => {
  try {
    const response = await axios.post(`${backendUrl}/products`, newProductData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const editProduct = async (id, newData) => {
  try {
    const response = await axios.patch(`${backendUrl}/products/${id}`, newData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${backendUrl}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // You might want to handle this error in the calling function
  }
};


export const login = async (email, password) => {
  try {
    const data = {email, password}
    const response = await axios.post(`${backendUrl}/users/login`, data);
    return response.data
  } catch (error) {
    console.log(error);
  }
}
