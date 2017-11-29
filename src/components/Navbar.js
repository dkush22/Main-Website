import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'


const Navbar = (props) => {
	return (
		<div className="ui six item menu inverted black"> 
			<div className="ui container">
			<NavLink className="item" to="/" exact activeStyle={{background: 'red'}}>Home</NavLink>	
			<NavLink className="item" to="/projects" exact activeStyle={{background: 'red'}}>Projects</NavLink>	
			<NavLink className="item" to="/bio" exact activeStyle={{background: 'red'}}>Bio</NavLink>	
			<NavLink className="item" to="/resume" exact activeStyle={{background: 'red'}}>Resume</NavLink>
			<NavLink className="item" to="/contact" exact activeStyle={{background: 'red'}}>Contact</NavLink>	
			<NavLink className="item" to="/fun" exact activeStyle={{background: 'red'}}>Fun Stuff</NavLink>			
			</div>
		</div>
	)
}

export default Navbar