import React from 'react';
import Container from 'react-bootstrap/Container';
import './Footer.css';

let Footer = (props) => {
    return (
        <Container>
            <footer>{props.Creator}</footer>
        </Container>
    )
}

export default Footer;