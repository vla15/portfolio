import React from 'react';
import './project.css';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, image, description, href } = this.props;
    const imageStyle = {
      backgroundImage: `url(${image})`
    }
    return <div className="project-content">
        <a href={href} className="project-title project-item">{title}</a>
        <div className="project-image-box project-item" style={imageStyle} />
        <div className="project-description project-item">
          {description}
        </div>
      </div>;
  }
}

export default Project;