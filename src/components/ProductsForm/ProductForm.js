import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const ProductForm = ({ dispatch }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    brand: '',
    category: '',
    discountPercentage: '',
    images: '',
    rating: '',
    stock: '',
    thumbnail: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formData', formData);
    dispatch({ type: 'ADD_PRODUCT', newProduct: formData });
    navigate('/products');
  };

  return (
    <div>
      <h2>Create New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" name="title" value={formData.title} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description" name="description" value={formData.description} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter price" name="price" value={formData.price} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicBrand">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" placeholder="Enter brand" name="brand" value={formData.brand} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Enter category" name="category" value={formData.category} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicRating">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="text" placeholder="Enter rating" name="rating" value={formData.rating} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicStock">
          <Form.Label>Stock</Form.Label>
          <Form.Control type="text" placeholder="Enter stock" name="stock" value={formData.stock} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="Enter image URL" name="image" value={formData.image} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ProductForm;
