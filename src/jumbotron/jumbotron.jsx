import React from 'react';
import './jumbotron.css';

const JumboTron = (props) => {
  let imageStyle = {
    backgroundImage: 'url(main.jpg)'
  }
  return <div className="jumbo-content">
      <div className="jumbo-image" style={imageStyle} />
      <div className="jumbo-name jumbo-text">Vincent La</div>
      <div className="jumbo-role jumbo-text">
        Software Engineer in San Francisco, CA
      </div>
    </div>;
}

export default JumboTron;