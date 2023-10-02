import { useState } from 'react'
import './App.css'

import Game from './components/Game';
import hiragana from './assets/hiragana.json'
import katakana from './assets/katakana.json'

import { Paper } from '@mui/material';
import Themes from './components/Themes';

const defaultStyle = {
	color: 'black',
	backgroundColor: 'white'
}

const lightTheme = {
	color: 'black',
	backgroundColor: '#fdfdfd'
}

function App() {
	const [name, SetName] = useState('Hiragana');
	const [alphabet, SetAlphabet] = useState(hiragana);
	const [currentTheme, SetTheme] = useState(lightTheme);


	const clickHiragana = () => {
		SetName('Hiragana');
		SetAlphabet(hiragana);
		setTimeout(function() {
			document.getElementById('next-button').click();
		}, 50);
	}

	const clickKatakana = () => {
		SetName('Katakana');
		SetAlphabet(katakana);
		setTimeout(function() {
			document.getElementById('next-button').click();
		}, 50);
	}

	return (
		<div style={currentTheme} className='app-holder'>
			<div className='app'>
				<Themes
					SetTheme={SetTheme} />

				
				<div className="alphabet-buttons">
					<Paper elevation={4} className='select-button' onClick={clickHiragana} style={currentTheme}> Hiragana </Paper>
					<Paper elevation={4} className='select-button' onClick={clickKatakana} style={currentTheme}> Katakana </Paper>
					<div className='disable' style={currentTheme}> Kanji </div>
				</div>
				<div className='title'>Learn {name}</div>
				<Game
					name={name}
					alphabet={alphabet}
					currentTheme={currentTheme}/>
			</div>
		</div>
	)
}

export default App
