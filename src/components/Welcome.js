import React from 'react'
import familyPic from '../Family-Picture.jpg'
import michPic from '../Mich-Picture.png'
import dbPic from '../DB-Picture.png'
import cubaPic from '../Cuba-Picture.png'
import italyPic from '../Italy-Picture.png'
import facebookPic from '../Facebook-Picture.png'
import reactPic from '../reactjs.png'
import reduxPic from '../redux-picture.png'
import javascriptPic from '../javascript-picture.png'
import rubyPic from '../Ruby_logo.svg'
import railsPic from '../rails-picture.jpeg'
import htmlPic from '../html-picture.png'
import danPic from '../dan.png'

const Welcome = () => {
	return (
<div className="Body">
<div className="ui grid">
  <div className="row">
    <div className="three wide column">
    	<div className="container">
      <img className="images" src={rubyPic}/>
      <div className="overlay">
      <div className="text">Ruby</div>
      </div>
      </div>
    </div>
    <div className="ten wide column">
    </div>
    <div className="three wide column">
    <div className="container">
      <img className="images" src={railsPic}/>
      <div className="overlay">
      <div className="text">Ruby on Rails</div>
      </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="three wide column">
    <div className="container">
      <img className="images" src={reactPic}/>
      <div className="overlay">
      <div className="text">React</div>
      </div>
      </div>
    </div>
    <div className="ten wide column">
		<h2>My name is Daniel Kushel and I am a full stack web developer with a passion for sports and finance, experience in Ruby on Rails, JavaScript, React, and Redux, with a background in operations management.</h2>
		<h2>Welcome to my website!</h2>
    </div>
    <div className="three wide column">
    <div className="container">
      <img className="images" src={reduxPic}/>
      <div className="overlay">
      <div className="text">Redux</div>
      </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="three wide column">
    <div className="container">
      <img className="images" src={javascriptPic}/>
      <div className="overlay">
      <div className="text">Javascript</div>
      </div>
      </div>
    </div>
    <div className="ten wide column">
 </div>
    <div className="three wide column">
    <div className="container">
      <img className="images" src={htmlPic}/>
      <div className="overlay">
      <div className="text">HTML/CSS</div>
      </div>
      </div>
    </div>
  </div>
</div>
</div>
)
}

export default Welcome