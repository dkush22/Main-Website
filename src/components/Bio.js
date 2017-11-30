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
      <img src={familyPic}/>
    </div>
    <div className="ten wide column">
     <h2>About Me</h2>
    </div>
    <div className="three wide column">
      <img src={michPic}/>
    </div>
  </div>
  <div className="row">
    <div className="three wide column">
      <img src={dbPic}/>
    </div>
    <div className="ten wide column">
      <h2>My Passion for Code</h2>
      <p>Test</p>
    </div>
    <div className="three wide column">
      <img src={facebookPic}/>
    </div>
  </div>
  <div className="row">
    <div className="three wide column">
      <img src={cubaPic}/>
    </div>
    <div className="ten wide column">
      <h2>What's Next?</h2>
    </div>
    <div className="three wide column">
      <img src={italyPic}/>
    </div>
  </div>
</div>
</div>
)
}

export default Bio