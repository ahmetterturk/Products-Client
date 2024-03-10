import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProductCard = ({ item, isViewPage }) => {
  const {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title
  } = item;

  const navigate = useNavigate();

  const handleAddToCart = () => {
    const cartItems = Cookies.get('cartItems');
    const newItem = { id, title, price, rating, discountPercentage, description, category, images, stock, quantity: 1 };
    const updatedCart = cartItems ? JSON.parse(cartItems) : [];
    updatedCart.push(newItem);
    Cookies.set('cartItems', JSON.stringify(updatedCart));
    navigate('/cart');
  };  

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Brand: {brand}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <Card.Text>Category: {category}</Card.Text>
        {!isViewPage && (
          <Link to={`/products/${id}`}>
            <Button variant="primary">View</Button>
          </Link>
        )}
        {isViewPage && (
          <Button variant="primary" onClick={handleAddToCart}>
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
