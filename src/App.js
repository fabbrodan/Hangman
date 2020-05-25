import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const rowPaddingTop = {
  paddingTop: 150
}

let App = () => {
  return (
    <Container id="main">
      <Row style={rowPaddingTop}>
        <Col lg={{offset: 5, span: 3}} sm={{offset: 5, span: 2}} md={{offset: 5, span: 3}}>
          <h1>Hänga Gubbe</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={{offset: 3, span: 7}} sm={{offset: 5, span: 2}} md={{offset: 5, span: 3}}>
          <p>
            Datorn kommer att generera ett slumpmässigt ord som du sedan skall gissa dig fram till.
            Du har 5 gissningar på dig.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;