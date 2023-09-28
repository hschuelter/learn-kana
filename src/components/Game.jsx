import { useState } from 'react'
import '../App.css'

import Card from './Card';
import { Paper } from '@mui/material';

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

const hiraganas = [
	{ title: 'あ', description: 'a' },
	{ title: 'い', description: 'i' },
	{ title: 'う', description: 'u' },
	{ title: 'え', description: 'e' },
	{ title: 'お', description: 'o' },

	{ title: 'か', description: 'ka' },
	{ title: 'き', description: 'ki' },
	{ title: 'く', description: 'ku' },
	{ title: 'け', description: 'ke' },
	{ title: 'こ', description: 'ko' },

	{ title: 'さ', description: 'sa' },	
	{ title: 'し', description: 'si' },
	{ title: 'す', description: 'su' },
	{ title: 'せ', description: 'se' },
	{ title: 'そ', description: 'so' },

	{ title: 'た', description: 'ta' },	
	{ title: 'ち', description: 'ti' },
	{ title: 'つ', description: 'tsu' },
	{ title: 'て', description: 'te' },
	{ title: 'と', description: 'to' },

	{ title: 'な', description: 'na' },	
	{ title: 'に', description: 'ni' },
	{ title: 'ぬ', description: 'nu' },
	{ title: 'ね', description: 'ne' },
	{ title: 'の', description: 'no' },

	{ title: 'は', description: 'ha' },	
	{ title: 'ひ', description: 'hi' },
	{ title: 'ふ', description: 'hu' },
	{ title: 'へ', description: 'he' },
	{ title: 'ほ', description: 'ho' },

	{ title: 'ま', description: 'ma' },	
	{ title: 'み', description: 'mi' },
	{ title: 'む', description: 'mu' },
	{ title: 'め', description: 'me' },
	{ title: 'も', description: 'mo' },

	{ title: 'や', description: 'ya' },	
	{ title: 'ゆ', description: 'yu' },
	{ title: 'よ', description: 'yo' },

	{ title: 'ら', description: 'ra' },	
	{ title: 'り', description: 'ri' },
	{ title: 'る', description: 'ru' },
	{ title: 'れ', description: 're' },
	{ title: 'ろ', description: 'ro' },

	{ title: 'わ', description: 'wa' },	
	{ title: 'ゐ', description: 'wi' },
	{ title: 'ゑ', description: 'we' },
	{ title: 'を', description: 'wo' },
	{ title: 'ん', description: 'n' }
]


function RandomizeKanas() {
	var first = Math.floor(Math.random() * hiraganas.length) % hiraganas.length;
	var second = Math.floor(Math.random() * hiraganas.length) % hiraganas.length;

	if (first == second) second = (second + 1) % hiraganas.length;

	return {first, second};
}

function MakeCard(hiragana, isCorrect) {
    var card = {
        title: hiragana.title,
        description: hiragana.description,
        answerStyle: isCorrect ? correctStyle : wrongStyle
    };

    return card;
}


function Game() {
    
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
        values = RandomizeKanas();
        first = values.first;
        second = values.second;

        var bool = Math.random() < 0.5;

        setIsFirst(bool);
        setisShown(false);
        setIsActive(false);
        setFirstCard(MakeCard(hiraganas[first], bool));
        setSecondCard(MakeCard(hiraganas[second], !bool));
    };

    
    const [isShown, setisShown] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [count, setCount] = useState(0);
    
    var values = RandomizeKanas();
    var first = values.first;
	var second = values.second;

    var bool = Math.random() < 0.5;
    const [isFirst, setIsFirst] = useState(bool);

    const [firstCard, setFirstCard] = useState(MakeCard(hiraganas[first], bool));
    const [secondCard, setSecondCard] = useState(MakeCard(hiraganas[second], !bool));


	return (
        <div>
			<div style={{display: 'flex', justifyContent: 'center'}}>

				<div className='example'> {isFirst ? firstCard.title : secondCard.title} </div>
			</div>
			<div className="dictionary">
				{/* { cards.map((item) => item) } */}
                
                <Paper
                    style={ isActive ? firstCard.answerStyle : defaultStyle}
                    className='card'
                    onClick={handleClickFirstKana}
                    elevation={4}>
                        { (isActive) ? 
                            <h1 className='break'>{firstCard.title}</h1> : 
                            <div ></div>
                        }
                        <p>{firstCard.description}</p>
                </Paper>

                <Paper
                    style={ isActive ? secondCard.answerStyle : defaultStyle}
                    className='card'
                    onClick={handleClickSecondKana}
                    elevation={4}>
                        { (isActive) ? 
                            <h1 className='break'>{secondCard.title}</h1> : 
                            <div ></div>
                        }
                        <p>{secondCard.description}</p>
                </Paper>
			</div>
			<div className="buttons">
				<Paper className='reset-button' elevation={4} style={buttonStyle}> Streak: {count} </Paper>
				<Paper className='reset-button' elevation={4} style={buttonStyle} onClick={handleClickReset}> <b>NEXT ➔</b> </Paper>
			</div>
        </div>
	)
}

export default Game
