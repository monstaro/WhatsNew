import React, { Component } from 'react';


import NewsContainer from '../NewsContainer/NewsContainer.js';
import Searchbar from '../Searchbar/Searchbar.js'
import Menu from '../Menu/Menu.js';
import Header from '../Header/Header.js'

import './App.css';

const API = 'https://whats-new-api.herokuapp.com/api/v1/news';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: null,
      entertainment: null,
      health: null,
      science: null,
      technology: null,
      current: null
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
  loadFetch = (data) => {
    console.log(Object.keys(data))
    let dat = Object.keys(data)
    dat.map(cat => {
      return this.setState(
        {
          [cat]: data[cat]
        }
      )
    })
  }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.loadFetch(data)
        this.setState({
          current: data.local
        })
      })
      .catch(error => console.log(error))
  }
  render () {
    console.log(this.state)
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
