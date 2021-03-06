import React, {useState, useEffect} from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import * as gallows from './Assets/Images/';
import Keyboard from './Components/Keyboard.js';
import GetRandomWord from './Util/words';
import WinModal from './Components/WinModal';
import LoseModal from './Components/LoseModal';

const letters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö'
]

const rowPaddingTop = {
  paddingTop: 75
}

let App = () => {

const wordLinesInit = (word) => {
  let lines = '';
  word.split('').map(letter => lines += '_ ');
  lines = lines.trimRight();
  return lines;
}

const [SecretWord, setSecretWord] = useState(GetRandomWord());
const [guesses, setCount] = useState(0);
const [internalGuessCount, setInternalGuessCount] = useState(0);
const [currentImg, setCurrentImg] = useState(gallows.gallow0);
const [wordlines, setLines] = useState(wordLinesInit(SecretWord));
const [hasWon, setWin] = useState(false);
const [hasLost, setLost] = useState(false);

useEffect(() => {

  if(!wordlines.includes('_') && internalGuessCount > 0) {
    setWin(true);
    }

  if (guesses === 6) {
    setLost(true);
  }

  setCurrentImg(gallows['gallow' + guesses]);
  if (guesses === 0 && internalGuessCount === 0) {
    setLines(wordLinesInit(SecretWord));
    setWin(false);
    setLost(false);
    }
}, [guesses, SecretWord, wordlines, internalGuessCount, hasWon, hasLost]);

const Reset = () => {
  let buttons = Array.from(document.getElementsByClassName('letter-button'));
  buttons.forEach(element => {
    element.disabled = false;
  });
  setCount(0);
  setInternalGuessCount(0);
  setSecretWord(GetRandomWord());
}

const ButtonPress = event => {
    let element = event.target;
    element.disabled = true;
    
    if(!VerifyLetter(element.innerText)) {
      setCount(guesses => guesses + 1);
    }
    setInternalGuessCount(internalGuessCount => internalGuessCount + 1);
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
          <p id="guessText" className="center-position">Antal gissningar kvar: {6 - guesses}</p>
        </Col>
      </Row>
      <Row>
        <Keyboard symbols={letters} listener={ButtonPress}/>
      </Row>
      <Row>
        <Keyboard symbols={["Återställ"]} listener={Reset}/>
      </Row>
      <WinModal isShowing={hasWon} guesses={internalGuessCount}/>
      <LoseModal isShowing={hasLost} word={SecretWord}/>
    </Container>
  );
}

export default App;