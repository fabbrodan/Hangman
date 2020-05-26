import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import gallow from './Assets/Images/gallow.png';
import Keyboard from './Components/Keyboard.js';
import GetRandomWord from './Assets/words';

const letters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö'
]

let guesses = 0;

const rowPaddingTop = {
  paddingTop: 75
}

let SecretWord = GetRandomWord();

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
      <Row>
        <Col className="center-position">
          <img id="gallowImg" src={gallow} alt="Gallow"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="center-position" id="wordLinesText">{wordLines(SecretWord)}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p id="guessText" className="center-position">Antal gissningar: {guesses}</p>
        </Col>
      </Row>
      <Row>
        <Keyboard symbols={letters} listener={ButtonPress}/>
      </Row>
      <Row>
        <Keyboard symbols={["Återställ"]} listener={Reset}/>
      </Row>
    </Container>
  );
}

const wordLines = (word) => {
  let lines = '';
  word.split('').map(letter => lines += '_ ');
  return lines;
}

const Reset = () => {
  let buttons = Array.from(document.getElementsByClassName('letter-button'));
  buttons.forEach(element => {
    element.disabled = false;
  });
  SecretWord = GetRandomWord();
  guesses = 0;
  document.getElementById("wordLinesText").innerText = wordLines(SecretWord);
  document.getElementById("guessText").innerText = "Antal gissningar: " + guesses;
}

const ButtonPress = event => {
    let element = event.target;
    element.disabled = true;
    guesses++;
    document.getElementById("guessText").innerText = "Antal gissningar: " + guesses;
}

export default App;