import axios from 'axios';
import React, { useEffect, useReducer,useState } from 'react'
import {Helmet} from 'react-helmet-async'
import {useParams} from 'react-router-dom'
import {NavigationBar} from '../../src/Components'
import {FooterBar} from '../../src/Components'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col' 
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'


 const reducer =(state, action)=>{
    switch(action.type){
      case 'FETCH_REQUEST': return{...state, loading:true};
      case 'FETCH_SUCCESS': return{...state, product: action.payload, loading:false};
      case 'FETCH_FAILED': return{...state, loading:false, error:action.payload};
      default: return state;
    }
  }

const ProductInfoPage = () => {
  const [selected, setSelected] = useState('');
  const params = useParams();
  const {id} = params;


  const [{loading, error, product}, dispatch] = useReducer(reducer, 
    {
      loading:true, 
      error:'',
      product: []
    });

  useEffect(()=>{
    const fetchProducts = async () =>{
      dispatch({type: 'FETCH_REQUEST'});
      try {
        const result = await axios.get(`/api/products/product/${id}`);
        dispatch({type:'FETCH_SUCCESS', payload:result.data})
        
      } catch (error) {
        dispatch({type:'FETCH_FAIL', payload:error.message});
      }
    }
    fetchProducts();

  },[id])


  return (
    loading? <div>Loading...</div>
    : error? <div>{error}</div>
    : <div>
      <NavigationBar/>
      <Container className='mt-5'>
      <Row>

        <Col md={7}>
          <img className='w-100' src={product.image} alt={product.name} />
        </Col>

        <Col md={5}>
          <ListGroup variant='flush' className='mb-5'>
            <Helmet>
              <title>{product.name}</title>
            </Helmet>
            <ListGroup.Item className='h3'>{product.name}</ListGroup.Item>
            <ListGroup.Item className='h5'>
              <Row>
                <Col>${product.price}</Col>
                <Col>{(product.sizes['S']>0 ||product.sizes['M']>0 ||product.sizes['L']>0)? (<Badge bg='success'>In Stock</Badge>):(<Badge bg='danger'>Out of Stock</Badge>)}</Col>
              </Row>
            </ListGroup.Item>
           </ListGroup>

          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col md={3}>Category:</Col>
                <Col><b>{product.category}</b></Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col md={3}>Color:</Col>
                <Col><b>{product.color}</b></Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item className='mb-5'>
              <select className='form-control' onChange={(e)=>{setSelected(e.target.value); console.log(e.target.value)}}>
                <option>Select Size</option>
                {(product.sizes['S']>0)?(<option value='S'>S</option>):(<option disabled='true'>S</option>)}
                {(product.sizes['M']>0)?(<option value='M'>M</option>):(<option disabled='true'>M</option>)}
                {(product.sizes['L']>0)?(<option value='L'>L</option>):(<option disabled='true'>L</option>)}
              </select>
            </ListGroup.Item>
          </ListGroup>

          {(product.sizes['S']>0 || product.sizes['M']>0 || product.sizes['L']>0)?(<Button className='bg-dark w-100 mt-5'>Add to Cart</Button>):(<Button disabled='true' className='bg-dark w-100 mt-5'>Add to Cart</Button>)}
        </Col>

      </Row>
      </Container>

      <FooterBar/>
    </div>
  )
}

export default ProductInfoPage