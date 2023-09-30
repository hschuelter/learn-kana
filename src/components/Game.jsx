import { useState } from 'react'
import '../App.css'

import Card from './Card';
import { Paper } from '@mui/material';
// import alphabet from '../assets/hiragana.json'

const buttonStyle = {
	height: 20, 
	width: 120,
	padding: '8px',
	backgroundColor: 'white',
	color: 'black'
}

const defaultStyle = {
	height: 120, 
	width: 120,
	padding: '8px',
	color: 'black'
}

const correctStyle = {
	height: 120, 
	width: 120,
	padding: '8px',
	backgroundColor: '#0c0',
	color: 'black'
}

const wrongStyle = {
	height: 120, 
	width: 120,
	padding: '8px',
	backgroundColor: '#f00',
	color: 'black'
}

function RandomizeKanas(alphabet) {
	var first = Math.floor(Math.random() * alphabet.length) % alphabet.length;
	var second = Math.floor(Math.random() * alphabet.length) % alphabet.length;

	if (first == second) second = (second + 1) % alphabet.length;

	return {first, second};
}

function MakeCard(hiragana, isCorrect) {
    var card = {
        kana: hiragana.kana,
        roumaji: hiragana.roumaji,
        answerStyle: isCorrect ? correctStyle : wrongStyle
    };

    return card;
}


function Game({ alphabet }) {
    
    const handleClickKana = () => {
        setIsActive(true);
    }

    const handleClickFirstKana = () => {
        handleClickKana();
        if (!isShown) {
            setisShown(true);
            if (isFirst) {
                setCount( count => count + 1);
            }
            else {
                setCount(0);
            }
        }
    }

    const handleClickSecondKana = () => {
        handleClickKana();
        if (!isShown) {
            setisShown(true);
            if (!isFirst) {
                setCount( count => count + 1);
            }
            else {
                setCount(0);
            }
        }
    }

    const handleClickReset = () => {
        values = RandomizeKanas(alphabet);
        first = values.first;
        second = values.second;

        var bool = Math.random() < 0.5;

        setIsFirst(bool);
        setisShown(false);
        setIsActive(false);
        setFirstCard(MakeCard(alphabet[first], bool));
        setSecondCard(MakeCard(alphabet[second], !bool));
    };

    
    const [isShown, setisShown] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [count, setCount] = useState(0);
    
    var values = RandomizeKanas(alphabet);
    var first = values.first;
	var second = values.second;

    var bool = Math.random() < 0.5;
    const [isFirst, setIsFirst] = useState(bool);

    const [firstCard, setFirstCard] = useState(MakeCard(alphabet[first], bool));
    const [secondCard, setSecondCard] = useState(MakeCard(alphabet[second], !bool));


	return (
        <div>
			<div style={{display: 'flex', justifyContent: 'center'}}>

				<div className='example'> {isFirst ? firstCard.kana : secondCard.kana} </div>
			</div>
			<div className="dictionary">
				{/* { cards.map((item) => item) } */}
                
                <Paper
                    style={ isActive ? firstCard.answerStyle : defaultStyle}
                    className='card'
                    onClick={handleClickFirstKana}
                    elevation={4}>
                        { (isActive) ? 
                            <div className='kana break'>{firstCard.kana}</div> : 
                            <div ></div>
                        }
                        <p>{firstCard.roumaji}</p>
                </Paper>

                <Paper
                    style={ isActive ? secondCard.answerStyle : defaultStyle}
                    className='card'
                    onClick={handleClickSecondKana}
                    elevation={4}>
                        { (isActive) ? 
                            <div className='kana break'>{secondCard.kana}</div> : 
                            <div ></div>
                        }
                        <p>{secondCard.roumaji}</p>
                </Paper>
			</div>
			<div className="buttons">
				<Paper className='reset-button' elevation={4} style={buttonStyle}> Streak: {count} </Paper>
				<Paper className='reset-button' id='next-button' elevation={4} style={buttonStyle} onClick={handleClickReset}> <b>NEXT ➔</b> </Paper>
			</div>
        </div>
	)
}

export default Game
