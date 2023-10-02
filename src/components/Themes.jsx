import { useState } from 'react'
import '../App.css'

const lightTheme = {
	color: 'black',
	backgroundColor: '#fdfdfd'
}

const darkTheme = {
	color: 'white',
	backgroundColor: '#242424'
}

const matchaTheme = {
	color: 'black',
	backgroundColor: '#96ed54'
}

const orangeTheme = {
	color: 'white',
	backgroundColor: '#ed9454'
}

const blueTheme = {
	color: 'white',
	backgroundColor: '#5499ed'
}

const redTheme = {
	color: 'white',
	backgroundColor: '#ed5454'
}

const purpleTheme = {
	color: 'white',
	backgroundColor: '#8754ed'
}

function Themes({ SetTheme }) {

	const changeToDarkTheme = () => {
		SetTheme(darkTheme);
	}
	const changeToLightTheme = () => {
		SetTheme(lightTheme);
	}
	const changeToMatchaTheme = () => {
		SetTheme(matchaTheme);
	}
	const changeToOrangeTheme = () => {
		SetTheme(orangeTheme);
	}
	const changeToBlueTheme = () => {
		SetTheme(blueTheme);
	}
	const changeToRedTheme = () => {
		SetTheme(redTheme);
	}
	const changeToPurpleTheme = () => {
		SetTheme(purpleTheme);
	}
	
	return (
        <div className="theme-group">
            <div className='theme-button' onClick={changeToLightTheme} 	style={lightTheme} />
            <div className='theme-button' onClick={changeToDarkTheme} 	style={darkTheme} />
            {/* <div className='theme-button' onClick={changeToMatchaTheme} style={matchaTheme} /> */}
            {/* <div className='theme-button' onClick={changeToOrangeTheme} style={orangeTheme} /> */}
            <div className='theme-button' onClick={changeToBlueTheme} 	style={blueTheme} />
            <div className='theme-button' onClick={changeToRedTheme} 	style={redTheme} />
            <div className='theme-button' onClick={changeToPurpleTheme} style={purpleTheme} />
        </div>
	)
}

export default Themes
