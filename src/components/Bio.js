import React from 'react'
import familyPic from '../Family-Picture.jpg'
import michPic from '../Mich-Picture.png'
import dbPic from '../DB-Picture.png'
import cubaPic from '../Cuba-Picture.png'
import italyPic from '../Italy-Picture.png'
import facebookPic from '../Facebook-Picture.png'


const Bio = () => {
	return (
<div className="Body">
<div className="ui grid">
  <div className="row">
    <div className="three wide column">
    	<div className="container">
      <img className="images" src={familyPic}/>
      <div className="overlay">
      <div className="text">Enjoying a wedding with my family</div>
      </div>
      </div>
    </div>
    <div className="ten wide column">
     <h2>About Me</h2>
     <p>My name is Daniel Kushel and I was born and raised in Great Neck, New York. I am a sports fanatic with a passion for finance and more recently, programming. I graduated from the Ross School of Business at the University of Michigan and it is there that I began working on Daily Bracket, an app that bridges the gap between legal sports gambling and daily fantasy sports. I was in charge of all day-to-day operations as well as providing the content that our users saw everyday. In my spare time I enjoy writing sketch comedy, going to Yankee games, and playing golf (and coding)! </p>
    </div>
    <div className="three wide column">
    <div className="container">
      <img className="images" src={michPic}/>
      <div className="overlay">
      <div className="text">Awaiting Michigan vs. Ohio State Basketball... Go Blue!</div>
      </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="three wide column">
    <div className="container">
      <img className="images" src={dbPic}/>
      <div className="overlay">
      <div className="text">Presenting our app to an Emory University business class</div>
      </div>
      </div>
    </div>
    <div className="ten wide column">
      <h2>My Passion for Code</h2>
      <p>While working at Daily Bracket, I became enamored by the role of our lead developer. He was the first defense and direct problem solver for any issues that arose. While I enjoyed being in a project manager role, I yearned to be more of a direct problem solver. I started fiddling around with some code online, but knew that if I wanted to really hone this craft, I would have to dedicate more time to it. I was able to do this with my acceptance into the Flatiron School's Full-Stack Web Development Immersive Program. This program allowed me to become proficient in Ruby on Rails, Javascript, React and Redux and my passion for code has never been greater! </p>
    </div>
    <div className="three wide column">
    <div className="container">
      <img className="images" src={facebookPic}/>
      <div className="overlay">
      <div className="text">Touring the Facebook Office in Austin, Texas</div>
      </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="three wide column">
    <div className="container">
      <img className="images" src={cubaPic}/>
      <div className="overlay">
      <div className="text">Hiking in Vinales, Cuba</div>
      </div>
      </div>
    </div>
    <div className="ten wide column">
      <h2>What's Next?</h2>
      <p>While my time at the Flatiron School is over, my enthusiasm to learn hasn't waned. I am learning new languages and working on new projects, while continuing to reaffirm the skills I already have. I am actively seeking opportunities in this field and would love a chance to prove myself. </p>
    </div>
    <div className="three wide column">
    <div className="container">
      <img className="images" src={italyPic}/>
      <div className="overlay">
      <div className="text">Taking in the Biboli Gardens in Florence, Italy</div>
      </div>
      </div>
    </div>
  </div>
</div>
</div>
)
}

export default Bio