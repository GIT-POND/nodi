import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'

function NavigationBar() {
  return (<>
    <div className='mb-3'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <LinkContainer to='/'> 
            <Navbar.Brand>eShop</Navbar.Brand>
          </LinkContainer>

          <Nav className='me-auto'>
            <LinkContainer to='/products'>
              <Nav.Link>Graphic Tees</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/products'>
              <Nav.Link>Shirts</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav>
            <LinkContainer to='/products'>
              <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  </>)
}

export default NavigationBar