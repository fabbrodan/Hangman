import React from 'react';
import './Background.css';
import Container from 'react-bootstrap/container';
import background from '../Images/background.png';

const Background = () => {
    return(
        <Container>
            <img id="backgroundImg" src={background} alt="background"/>
        </Container>
    );
}

export default Background;