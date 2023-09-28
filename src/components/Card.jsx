import { useState } from 'react'
import '../App.css'

import Paper from '@mui/material/Paper';


function Card({ title, description, defaultStyle, answerStyle, answer, show }) {
    const [isActive, setIsActive] = useState(false);
    const [isShow, SetIsShow] = useState(show);
    
    const handleClick = () => {
        setIsActive(isActive => !isActive);
        SetIsShow(true);
    }

	return (
        <Paper
            style={ (isActive && isShow) ? answerStyle : defaultStyle}
            className='card'
            onClick={handleClick}
            elevation={4}>
                { (isActive && isShow) ? 
                    <h1 className='break'>{title}</h1> : 
                    <div ></div>
                }
                <p>{description}</p>
        </Paper>
	)
}

export default Card
