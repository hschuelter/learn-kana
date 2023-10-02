import { useState } from 'react'
import '../App.css'

import { Paper } from '@mui/material';
// import hiragana from '../assets/hiragana.json'
// import katakana from '../assets/katakana.json'

function Alphabet({ SetAlphabet, SetName, currentTheme, hiragana, katakana }) {

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
        <div className="alphabet-buttons">
            <Paper elevation={4} className='select-button' onClick={clickHiragana} style={currentTheme}> Hiragana </Paper>
            <Paper elevation={4} className='select-button' onClick={clickKatakana} style={currentTheme}> Katakana </Paper>
            <div className='disable' style={currentTheme}> Kanji </div>
        </div>
	)
}

export default Alphabet
