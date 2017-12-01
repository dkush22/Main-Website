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
      <div className="text">Enoying a wedding with my family</div>
      </div>
      </div>
    </div>
    <div className="ten wide column">
     <h2>About Me</h2>
     <p>Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...</p>
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
      <p>Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...</p>
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
      <p>Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...Hello My Name is Daniel...</p>
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