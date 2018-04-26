import React from 'react';
import './header.css';

const Header = props => {
  const emailStyle = { backgroundImage: 'url(gmail.png)' };
  const linkedinStyle = { backgroundImage: 'url(linkedin.png)' };
  const githubStyle = { backgroundImage: "url(github-light.png)" };
  return <div className="header-content">
      <div className="header-title">Vincent La</div>
      <div className="header-links">
        <a href="mailto:vincela15@gmail.com" className="header-item email" style={emailStyle} />
        <a href="https://www.linkedin.com/in/vincela/" className="header-item linkedin" style={linkedinStyle} />
        <a href="https://github.com/vla15" className="header-item github" style={githubStyle} />
      </div>
    </div>;
};

export default Header;