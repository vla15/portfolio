import React from 'react';
import './jumbotron.css';

const JumboTron = (props) => {
  let imageStyle = {
    backgroundImage: 'url(main.jpg)'
  }
  return (
    <div className="jumbo-content">
      <div className="jumbo-image" style={ imageStyle }></div>
      <div className="jumbo-name">Vincent La</div>
      <div className="jumbo-role">Software Engineer in San Francisco, CA</div>
    </div>
  )
}

export default JumboTron;