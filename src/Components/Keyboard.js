import React from 'react';
import LetterButton from './LetterButton.js';
import Col from 'react-bootstrap/Col';

let Keyboard = (props) => {
    return (
        props.symbols.map(
            sym => <Col lg={1} md={3} sm={4} xs={6}>{LetterButton(sym, props.listener)}</Col>)
    );
}

export default Keyboard;