import React, {useState, useEffect} from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import * as gallows from './Assets/Images/';
import Keyboard from './Components/Keyboard.js';
import GetRandomWord from './Util/words';

const letters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö'
]

const rowPaddingTop = {
  paddingTop: 75
}

let App = () => {

  const wordLines = (word) => {
    let lines = '';
    word.split('').map(letter => lines += '_ ');
    lines = lines.trimRight();
    return lines;
  }

const [SecretWord, setSecretWord] = useState(GetRandomWord());
const [guesses, setCount] = useState(0);
const [currentImg, setCurrentImg] = useState(gallows.gallow0);
const [wordlines, setLines] = useState(wordLines(SecretWord));

useEffect(() => {
  setCurrentImg(gallows['gallow' + guesses]);
  console.log(wordlines);
}, [guesses, wordlines]);

const Reset = () => {
  let buttons = Array.from(document.getElementsByClassName('letter-button'));
  buttons.forEach(element => {
    element.disabled = false;
  });
  setCount(0);
  setCurrentImg(gallows.gallow0);
  setSecretWord(GetRandomWord());
  setLines(wordLines(SecretWord));
  console.log(SecretWord, wordlines);
}

const ButtonPress = event => {
    let element = event.target;
    element.disabled = true;
    
    if(!VerifyLetter(element.innerText)) {
      setCount(guesses+1);
    }
}

const VerifyLetter = (letter) => {
  if (SecretWord.includes(letter)) {
    var wordlinesArr = wordlines.split(' ');
    for (var i = 0; i < SecretWord.length; i++) {
      if (SecretWord[i] === letter) {
        wordlinesArr[i] = letter;
        setLines(wordlinesArr.join(' '));
      }
    }
    
    return true;
  }
  return false;
}

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
            Du har 6 gissningar på dig.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="center-position">
          <img id="gallowImg" src={currentImg} alt="Gallow"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="center-position" id="wordLinesText">{wordlines}</p>
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

export default App;