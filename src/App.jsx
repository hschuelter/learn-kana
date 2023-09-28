import { useState } from 'react'
import './App.css'

import Game from './components/Game';
import hiragana from './assets/hiragana.json'
import katakana from './assets/katakana.json'

import { Paper } from '@mui/material';


function App() {
	const [name, SetName] = useState('Hiragana')
	const [alphabet, SetAlphabet] = useState(hiragana)


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
		<>
			<div className="alphabet-buttons">
				<div className='select-button' onClick={clickHiragana}> Hiragana </div>
				<div className='select-button' onClick={clickKatakana}> Katakana </div>
				<div className='select-button disable'> Kanji </div>
			</div>
			<div className='title'>Learn {name}</div>
			<Game
				name={name}
				alphabet={alphabet}/>
		</>
	)
}

export default App
