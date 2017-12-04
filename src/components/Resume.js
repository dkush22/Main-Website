import React from 'react'
import resumePic from '../Resume.png'

const Resume = () => {

return (
<div className="Body">
<div className="ui grid">
<button className="fluid ui black button"><a href="https://docs.google.com/document/d/194fVVI8I0_-iI0t7JJSErmGYckB9VMcfFWnBPCUlZOs/" target="_blank"><font color="white">Click for Resume in Google Doc </font></a></button>
  <img className="ui centered big image" src={resumePic}/>
 </div>
</div>
)
}

export default Resume