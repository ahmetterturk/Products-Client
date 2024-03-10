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


export const editProduct = async (id, newData, userData) => {
  try {
    const response = await axios.patch(`${backendUrl}/products/${id}`, { newData, userData });
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
  }
};

export const fetchUserById = async (id) => {
  try {
    const response = await axios.get(`${backendUrl}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};

export const createUser = async (userData, adminData) => {
  try {
    const requestData = { ...userData, adminData };
    const response = await axios.post(`${backendUrl}/users`, requestData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

export const editUser = async (id, newData, adminData) => {
  try {
    const requestData = { ...newData, adminData };
    const response = await axios.patch(`${backendUrl}/users/${id}`, requestData);
    return response.data;
  } catch (error) {
    console.error('Error editing user:', error);
  }
};

export const createSoldItem = async (itemData) => {
  try {
    const response = await axios.post(`${backendUrl}/sold-items`, itemData);
    return response.data;
  } catch (error) {
    console.error('Error creating sold item:', error);
    throw error;
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

export const searchProducts = async (query) => {
  try {
    console.log('query', query);
    const response = await axios.get(`${backendUrl}/products/search`, { params: { q: query } });
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};
