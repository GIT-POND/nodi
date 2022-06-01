import React, { useEffect, useReducer, useState } from 'react'
import {Helmet} from 'react-helmet-async'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import logger from 'use-reducer-logger'
import {ProdcutContainer} from '../../src/Components'
import {NavigationBar} from '../../src/Components'
import {FooterBar} from '../../src/Components'
import Container from 'react-bootstrap/esm/Container'



 const reducer =(state, action)=>{
    switch(action.type){
      case 'FETCH_REQUEST': return{...state, loading:true};
      case 'FETCH_SUCCESS': return{...state, products: action.payload, loading:false};
      case 'FETCH_FAILED': return{...state, loading:false, error:action.payload};
      default: return state;
    }
  }

function ProductPage() {
  //const [products, setProducts] = useState([]); // products is updated when component renders the first time.
  const [{loading, error, products}, dispatch] = useReducer(reducer, 
    {
      loading:true, 
      error:'',
      products: []
    });

  useEffect(()=>{
    const fetchProducts = async () =>{
      dispatch({type: 'FETCH_REQUEST'});
      try {
        const result = await axios.get('/api/products');
        dispatch({type:'FETCH_SUCCESS', payload:result.data})
        console.log(result);
      } catch (error) {
        dispatch({type:'FETCH_FAIL', payload:error.message});
      }
    }

    fetchProducts();
  },[])

  return (<>
    <style>{`
      .productListContainer{
        padding-left: 2em;
        padding-right: 2em; 
      }

      .productList{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    `}</style>

    <Helmet>
      <title>Featured Products</title>
    </Helmet>
    <NavigationBar />
    
    <Container>
      {loading?(
        <div>loading</div>
      ): error?(
        <div>{error}</div>
      ):(
        <div >
          <h1>Featured Products</h1>
          <Row className='align-items-start'>
          {
            products.map(product => (
                <Col sm={6}md={4}lg={3} className='mb-4' key={product.id}>
                  <ProdcutContainer key={product.id} {...product}/>
                </Col>
              )
            )
          }
          </Row>
        </div>
      )}
    </Container>

    <FooterBar/>
    </>);
}

export default ProductPage;