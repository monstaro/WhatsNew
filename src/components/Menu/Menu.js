import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
  constructor() {
    super()
    this.state = {
      activeCategory: null
    }
  }
  updateState = (event) => {
    this.setState(
      {
        activeCategory: event.target.value
      }
    )
    this.props.handleClick(event.target.value)
  }
  render() {
    return (
    <nav className="nav-bar">
      {
        Object.keys(this.props.categories).map(subject => {
          console.log(subject)
          return (
            <p className="nav-categories">
              <button onClick={this.updateState} 
                      value={subject} 
                      className={this.state.activeCategory === subject ? 'news-type selected-news' : 'news-type'}
              >{subject}</button>
            </p>
          )
        })
      }
    </nav>
    )
  }
}


export default Menu;