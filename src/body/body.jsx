import React from 'react';
import Project from '../project/project.jsx';
import './body.css';

class Body extends React.Component {
  constructor(props) {
    super(props)
  }

  renderProjects() {
    let projects = [
      { image: "ce.jpeg", href: 'https://github.com/lovelylions/lovelylions', title: "Cadvre Exquis", description: `An online version of the surrealist parlour game in which a drawing is assembled through a collection of images. Each artist will have an opportunity to render a unique image and allow them to contribute to other artists creations.` },
      { image: "ct.jpeg", href: 'https://github.com/vla15/MagnanimousMonkeys77', title: "Check Thumbs", description: `A survey application allowing users to poll connected clients in real-time with the use of web sockets.  The results are then aggregated to determine an average score of those users who voted.` },
      { image: "nqu.jpeg", href: 'https://github.com/vla15/LuminousLeeks77', title: "nQu", description: `An application that enables business owners to monitor customers who are currently waiting in the queue through a real time, intuitive and clean UI. In addition, it will allow business owners to track the location of customers who have added themselves to the queue list and automatically send an SMS alert after a predefined time. Customers can also utilize this application to enqueue themselves to available wait lists within their proximity. It also enables the customer to actively monitor their expected wait times and the number of parties ahead of them.` }
    ];
    return projects.map((project, i) => <Project key={i} href={project.href} image={project.image} title={project.title} description={project.description}/>)
  }

  render() {
    return <div className="content">
      <h2 className="section-header">Projects</h2>
      <div className="project-body">
        {this.renderProjects()}
      </div>
      </div>;
  }
}

export default Body;