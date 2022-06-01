import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'


const ProductContainer = (props) => { 
    return (<>
        <style>{`
            #noDeco{
                text-decoration:none;
                color:black;
            }
        `}</style>

        <Card key={props.id} className='border-0'>
            <Link to={`/product/${props.id}`}>
                <Card.Img src={props.image} alt={props.name} />
            </Link>
            <Card.Body>
                <Link to={`/product/${props.id}`} id='noDeco'>
                    <Card.Title>{props.name}</Card.Title>
                </Link>
                <Card.Text>${props.price} USD</Card.Text>
            </Card.Body>
        </Card>
    </>)
}

export default ProductContainer