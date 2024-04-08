import React, { useState } from 'react'; 
import { FaArrowCircleUp } from 'react-icons/fa'; 

import './BackToTopBtn.css'

const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 400){ 
	setVisible(true) 
	} 
	else if (scrolled <= 400){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top:0, 
	behavior: 'smooth'
	/* you can also use 'auto' behaviour 
		in place of 'smooth' */
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return ( 
	<div> 
	    <FaArrowCircleUp onClick={scrollToTop} id="BackToTopBtn"
		style={{display: visible ? 'inline' : 'none'}}
		/> 
	</div>
    // <button id="backToTopBtn" onclick="scrollToTop()">⬆︎</button>
); 
} 

export default ScrollButton; 
