import { useState } from 'react'
import './App.css'

import Game from './components/Game';
import hiragana from './assets/hiragana.json'
import katakana from './assets/katakana.json'

import Themes from './components/Themes';
import Alphabet from './components/Alphabet';

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

	return (
		<div style={currentTheme} className='app-holder'>
			<div className='app'>
				<Themes
					SetTheme={SetTheme} />

				<Alphabet 
					SetAlphabet={SetAlphabet}
					SetName={SetName}
					currentTheme={currentTheme}
					hiragana={hiragana}
					katakana={katakana} />

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
