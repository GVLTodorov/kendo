import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import './components/theme/custom.scss';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Content />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
