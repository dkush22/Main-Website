import React from 'react'



const Projects = () => {

return(
<table className="ui celled padded table">
  <thead>
    <tr>
    <th className="single line">Title</th>
    <th>Description</th>
    <th>Demo</th>
    <th>Frontend</th>
    <th>Backend</th>
    <th>Github</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <h2 className="ui center aligned header">SportsMarket</h2>
      </td>
            <td>
        A fantasy sports-stock market hybrid that allows users to watch as their portfolio of athletes grows weekly. Each athlete has a stock price that changes based on how they do weekly relative to their projected output.
      </td>
      <td className="single line">
       <iframe src="https://www.youtube.com/embed/WA89w8w4B3U"
   width="560" height="315" frameborder="0" allowfullscreen></iframe>
      </td>
      <td >
        React, Redux, JavaScript, chart.js
      </td>
       <td >
        Ruby on Rails, Postgres 
      </td>
      <td><a href="https://github.com/dkush22/SportsMarket-frontend" target="_blank">Frontend</a><br/><a href="https://github.com/dkush22/SportsMarket" target="_blank">Backend</a></td>
    </tr>
    <tr>
      <td>
        <h2 className="ui center aligned header">Instadam</h2>
      </td>
            <td>
        A photo-sharing application similar to Instagram, however it also uses a sentiment tracker that lets the user know if their comments are too nice or too mean. For Instadam, it will not let you post a comment if the sentiment tracker believes it is too nice. 
      </td>
      <td className="single line">
<iframe width="560" height="315" src="https://www.youtube.com/embed/kiTk8pMdPA4" frameborder="0" allowfullscreen></iframe>
      </td>
      <td >
        React, JavaScript, jQuery, Node.js Sentiment
      </td>
            <td >
        Ruby on Rails, Postgres
      </td>
<td><a href="https://github.com/dkush22/instadam-frontend" target="_blank">Frontend</a><br/><a href="https://github.com/dkush22/instadam-api" target="_blank">Backend</a></td>
    </tr>
    <tr>
      <td>
        <h2 className="ui center aligned header">YaKush.ly</h2>
      </td>
            <td>
        A one-stop shop for managing your money. You can link a bank account, add money to your YaKush.ly account, purchase stocks and send and receive money with friends on the app. 
      </td>
      <td className="single line">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0QSSg-l5SBs" frameborder="0" allowfullscreen></iframe>
      </td>
      <td >
        Ruby on Rails 
      </td>
            <td >
        Ruby on Rails, SQLite 
      </td>
<td><a href="https://github.com/dkush22/fake-stockmarket" target="_blank">Repo</a></td>
    </tr>
       <tr>
      <td>
        <h2 className="ui center aligned header">TicketTracker</h2>
      </td>
           <td>
        An app that allows you to track events in each state, while also utilizing the Google Maps API, giving the exact location of the event. You add these events into your cart for purchase.
      </td>
      <td className="single line">

      </td>
      <td >
        Vanilla JavaScript
      </td>
            <td >
        Ruby on Rails, Postgres
      </td>
<td><a href="https://github.com/dkush22/ticket-project-frontend" target="_blank">Frontend</a><br/><a href="https://github.com/dkush22/ticket-project-backend" target="_blank">Backend</a></td>
    </tr>  
  </tbody>
</table>
	)
}

export default Projects