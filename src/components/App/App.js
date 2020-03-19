import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';


import NewsContainer from '../NewsContainer/NewsContainer.js';
import Searchbar from '../Searchbar/Searchbar.js'
import Menu from '../Menu/Menu.js';
import Header from '../Header/Header.js'

import './App.css';

// const API = 'https://whats-new-api.herokuapp.com/api/v1/news';
// const DEFAULT_QUERY = 'redux';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local,
      entertainment: entertainment,
      health: health,
      science: science,
      technology: technology,
      current: local
    }
  }
  handleChange = (category) => {
    console.log()
    if(this.state[category]) {
      this.setState({
        current: this.state[category]
      })
    } else {
      alert(
       'this aint a valid search term yo' 
      )
    }

  }
  //   if (this.types[category]) {
  //     this.setState( {
  //       newsType: this.types[category]
  //     })
  //   } else {
  //     alert('this aint a valid search term yo')
  //   }
  // }
  // componentDidMount() {
  //   fetch(API)
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }
  render () {
    return (
      <div className="app">
        <Header className="header"/>
        <Searchbar className="search" handleChange={this.handleChange} />
        <Menu className="navbar" handleClick={this.handleChange} categories={this.state}/>
        <NewsContainer className="news" type={this.state.current} />
      </div>
    );
  }
}

export default App;
