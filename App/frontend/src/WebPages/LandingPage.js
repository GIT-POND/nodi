import React from 'react'
import {Helmet} from 'react-helmet-async'
import {NavigationBar} from '../../src/Components'
import {FooterBar} from '../../src/Components'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const LandingPage = () => {
  return (<>
  <style>{`
  #image1{
    background-image: url('https://images.unsplash.com/photo-1519649962620-8e085a22b142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80');
    background-position: center;
    background-size: cover;
    height: 60vh;
  }
  #image2{
    background-image: url('https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
    background-position: center;
    background-size: cover;
    height: 80vh;
  }
  #image3{
    background-image: url('https://www.tillys.com/dw/image/v2/BFBK_PRD/on/demandware.static/-/Sites-master-catalog/default/dw41de8b8f/tillys/images/catalog/1000x1000/430357151.jpg?sw=1000&sh=1286');
    background-position: center;
    background-size: cover;
    height: 80vh;
  }
  #image4{
    background-image: url('https://www.tillys.com/dw/image/v2/BFBK_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2a88756c/tillys/images/catalog/1000x1000/405177632a.jpg?sw=1000&sh=1286');
    background-position: center;
    background-size: cover;
    height: 80vh;
  }
  #image5{
    background-image: url('https://www.tillys.com/dw/image/v2/BFBK_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1894d906/tillys/images/catalog/1000x1000/425263415c.jpg?sw=1000&sh=1286');
    background-position: center;
    background-size: cover;
    height: 80vh;
  }

  #tile-label{
    background-color: rgba(40,40,40,.4);
    color: #fff;

    margin-bottom: 4em;

    border-style:solid;
    border-color: #fff;
    border-width: 3px;
  }

  `}</style>

  <Helmet>
    <title>eShop</title>
  </Helmet>
  <NavigationBar/>

  <Container fluid className='px-4'>
    <Row>
      <Link to='products' className='p-0 text-decoration-none'>
        <section id='image1' className='d-flex align-items-center justify-content-center'>
            <p className='display-6 px-5 text-center' id='tile-label'>featured <br/><span className='display-2 font-weight-bold'>PRODUCTS</span></p>
        </section>
      </Link>
    </Row>

    <Row className='mt-3 gap-3'>
      <Col className='p-0'>
        <Link to='products' className='text-decoration-none'>
          <section id='image2' className='d-flex align-items-end justify-content-center'>
              <span className='display-6 px-4' id='tile-label'>Graphic Tees</span>
          </section>
        </Link>
      </Col>

      <Col className='p-0'>
        <Link to='products' className='text-decoration-none'>
          <section id='image3' className='d-flex align-items-end justify-content-center'>
              <span className='display-6 px-4' id='tile-label'>Shirts</span>
          </section>
        </Link>
      </Col>
    </Row>

    <Row className='mt-3 gap-3'>
      <Col className='p-0'>
        <Link to='products' className='text-decoration-none'>
          <section id='image4' className='d-flex align-items-end justify-content-center'>
              <span className='display-6 px-4' id='tile-label'>Jeans</span>
          </section>
        </Link>
      </Col>

      <Col className='p-0'>
        <Link to='products' className='text-decoration-none'>
          <section id='image5' className='d-flex align-items-end justify-content-center'>
              <span className='display-6 px-4' id='tile-label'>Shorts</span>
          </section>
        </Link>
      </Col>
    </Row>
  </Container>

  <FooterBar/>

  </>)
}

export default LandingPage