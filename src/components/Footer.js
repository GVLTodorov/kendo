import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#">Footer</Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default Footer;
