import React from 'react'


const Contacts = () => {
	return(
	<div>
	<h2 className="ui center aligned icon header">
  <i className="circular users icon"></i>
  Feel Free to Contact Me!
</h2>
<div className="ui massive horizontal divided list">
  <div className="item">
    <i className="linkedin icon" />
    <div className="content">
      <a href="https://www.linkedin.com/in/daniel-kushel-15658a78/" target="_blank">LinkedIn</a>
    </div>
  </div>
  <div className="item">
    <i className="facebook icon" />
    <div className="content">
      <a href="https://www.facebook.com/dkush22" target="_blank">Facebook</a>
    </div>
  </div>
  <div className="item">
    <i className="mail icon" />
    <div className="content">
    <a href="mailto:dkush22@gmail.com">Gmail</a>
    </div>
  </div>
  <div className="item">
    <i className="github icon" />
    <div className="content">
      <a href="https://github.com/dkush22" target="_blank">Github</a>
    </div>
  </div>
</div>
<br/>
  <img src="https://media.giphy.com/media/yoJC2El7xJkYCadlWE/giphy.gif" alt=""/>
	</div>

)
}

export default Contacts