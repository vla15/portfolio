import React from 'react';
import './project.css';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.state ={
      animate: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  onScroll() {
    let el = document.getElementsByClassName('project-title')[this.props.index];
    if (el.getBoundingClientRect().bottom <= window.innerHeight) {
      this.setState({animate: true});
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    const { title, image, description, href } = this.props;
    const animationState = {
      animationName: 'topSlideIn',
      animationDuration: '1.5s'
    }
    const imageStyle = {
      backgroundImage: `url(${image})`
    }
    return <div className="project-content">
        <a href={href} className="project-title project-item">{title}</a>
        <div className="project-image-box project-item" style={this.state.animate ? Object.assign(animationState, imageStyle) : imageStyle} />
        <div className="project-description project-item">
          {description}
        </div>
      </div>;
  }
}

export default Project;