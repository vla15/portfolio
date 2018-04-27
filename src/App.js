import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './body/body.jsx';
import Header from './header/header.jsx';
import JumboTron from './jumbotron/jumbotron.jsx';
import About from './about/about.jsx';

class App extends Component {


  render() {
    return <div className="App">
        <div className="App-header">
          <Header/>
        </div>
        <div className="site-content">
          <JumboTron />
          <About />
          <Body />
        </div>
      </div>;
  }
}

export default App;
