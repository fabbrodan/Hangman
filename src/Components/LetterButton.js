import React from 'react';
import './LetterButton.css';

let LetterButton = ({letter, listener}) => {
    return (
        <button className="letter-button" onClick={listener}>
        {letter}
        </button>
    )
}

export default LetterButton;