import React from 'react';
import './project.css';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, image, description } = this.props;
    const imageStyle = {
      backgroundImage: `url(${image})`
    }
    return <div className="project-content">
        <div className="project-title">{title}</div>
        <div className="project-image-box" style={imageStyle}></div>
        <div className="project-description">{description}</div>
      </div>;
  }
}

export default Project;