import React from 'react';
import './Background.css';
import Container from 'react-bootstrap/container';

const Background = () => {
    return(
        <Container>
            <img id="backgroundImg" src={require('../Images/background.png')} alt="background"/>
        </Container>
    );
}

export default Background;