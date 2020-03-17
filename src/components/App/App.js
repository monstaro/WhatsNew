import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';


import NewsContainer from '../NewsContainer/NewsContainer.js';
import Searchbar from '../Searchbar/Searchbar.js'
import Menu from '../Menu/Menu.js';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsType: local
    }
    this.types = {
      local: local,
      entertainment: entertainment,
      health: health,
      science: science,
      technology: technology
    }  
  }
  handleChange = (category) => {
    if (this.types[category]) {
      this.setState( {
        newsType: this.types[category]
      })
    } else {
      alert('this aint a valid search term yo')
    }
  }
  render () {
    return (
      <div className="app">
        <Searchbar handleChange={this.handleChange} />
        <Menu handleClick={this.handleChange} categories={this.types}/>
        <NewsContainer type={this.state}/>
      </div>
    );
  }
}

export default App;
