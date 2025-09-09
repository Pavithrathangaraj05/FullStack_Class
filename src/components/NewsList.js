import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImage from '../image/image.png'


const NewsList = ({title,description,src,url}) => {
  return (
    <Card className='mb-3 d-inline-block mx-3 my-3 px-3 py-3' style={{ maxWidth: '345px' }}>
      <Card.Img style={{height:'200px',width:'300px'}} variant="top" src={src?src:myImage} />
      <Card.Body>
        <Card.Title>{title.slice(0,50)}</Card.Title>
        <Card.Text>
          {description?description.slice(0,100):"US News: A meteorite fragment that crashed through a Georgia home's roof in June has been identified"}
        </Card.Text>
        <Button variant="primary" href={url}>Read more</Button>
      </Card.Body>
    </Card>
  )
}

export default NewsList
