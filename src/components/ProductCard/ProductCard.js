import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const  ProductCard =(item) => {
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
  } = item.item;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          Brand: {brand}
        </Card.Text>
        <Card.Text>
          Price: {price}
        </Card.Text>
        <Card.Text>
          Rating: {rating}
        </Card.Text>
        <Link to={`/products/${id}`}>
          <Button variant="primary">Edit</Button>
        </Link>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;