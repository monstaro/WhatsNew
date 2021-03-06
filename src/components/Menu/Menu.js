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
        // eslint-disable-next-line array-callback-return
        Object.keys(this.props.categories).map(subject => {
          if (subject !== 'current' && subject !== 'key') {
            // subject = subject.toUpperCase()
            return (
              <p className={this.state.activeCategory === subject ? 'nav-categories selected-news' : 'nav-categories'}>
                <button onClick={this.updateState} 
                        value={subject} 
                        className={this.state.activeCategory === subject ? 'news-type selected-news' : 'news-type'}
                >{subject.toUpperCase()}</button>
              </p>
            )
          }
        })
      }
    </nav>
    )
  }
}


export default Menu;