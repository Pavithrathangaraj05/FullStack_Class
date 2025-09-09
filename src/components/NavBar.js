import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
const NavBar = ({setCategories}) => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand ><Badge bg='danger' className='p-2'> News App</Badge></Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link onClick={()=>setCategories('general')}>General</Nav.Link> */}
            <Nav.Link onClick={()=>setCategories('business')}>Business</Nav.Link>
            <Nav.Link onClick={()=>setCategories('sports')}>Sports</Nav.Link>
            <Nav.Link onClick={()=>setCategories('entertainment')}>Entertainment</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
