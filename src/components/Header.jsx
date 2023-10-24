import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><i class="fa-solid fa-user-tie text-dark"></i> Employee Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar> 
    </>
  )
}

export default Header