import React, { Component } from 'react';
import local from '../../data/local';
// import entertainment from '../../data/entertainment';
// import health from '../../data/health';
// import science from '../../data/science';
// import technology from '../../data/technology';


import NewsContainer from '../NewsContainer/NewsContainer.js';

import Menu from '../Menu/Menu.js';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsType: local
    }
    // {
    //   local: local,
    //   entertainment: entertainment,
    //   health: health,
    //   science: science,
    //   technology: technology
    // }
  }
  // setState(category) {
  //   this.setState(return this.category)
  // }
  render () {
    return (
      <div className="app">
        <Menu />
        <NewsContainer type={this.state}/>
      </div>
    );
  }
}

export default App;
