import React from 'react'
import familyPic from '../Family-Picture.jpg'


const Bio = () => {
	return (
<div className="ui grid">
  <div className="row">
    <div className="three wide column">
      <img src={familyPic}/>
    </div>
    <div className="ten wide column">
     <h2>About Me</h2>
    </div>
    <div className="three wide column">
      <img src={familyPic}/>
    </div>
  </div>
  <div className="row">
    <div className="three wide column">
      <img src={familyPic}/>
    </div>
    <div className="ten wide column">
      <h2>My Passion for Code</h2>
    </div>
    <div className="three wide column">
      <img src={familyPic}/>
    </div>
  </div>
  <div className="row">
    <div className="three wide column">
      <img src={familyPic}/>
    </div>
    <div className="ten wide column">
      <h2>What's Next?</h2>
    </div>
    <div className="three wide column">
      <img src={familyPic}/>
    </div>
  </div>
</div>
)
}

export default Bio