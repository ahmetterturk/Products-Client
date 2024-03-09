import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import ProductCard from './../ProductCard/ProductCard'; 
import { useGlobalContext } from '../../globalContext/context';
import { fetchProductById, editProduct } from '../../api/api';
import { Form, Button } from 'react-bootstrap';

const ProductPage = () => {
  const { id } = useParams();
  const { state, dispatch } = useGlobalContext();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);
        setFormData({
          title: productData.title,
          description: productData.description,
          price: productData.price,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getProduct(); 
  }, [id]); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = await editProduct(id, formData);
      setProduct(updatedProduct);
      navigate('/products');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {product && <ProductCard item={product} />}
      <h2>Edit Product</h2>
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ProductPage;
