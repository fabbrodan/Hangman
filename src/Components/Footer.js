import React from 'react';
import Container from 'react-bootstrap/Container';
import './Footer.css';

let Footer = ({Creator}) => {
    return (
        <Container>
            <footer>{Creator}</footer>
        </Container>
    )
}

export default Footer;