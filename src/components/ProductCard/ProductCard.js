import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const  ProductCard =(item) => {
  console.log(item);
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

  console.log(title);
  console.log(description);
  console.log(item);


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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;