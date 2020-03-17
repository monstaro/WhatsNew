import React, { Component } from 'react'


class Searchbar extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }
  updateState = (event) => {
    event.preventDefault()
    this.setState(
      {
        searchTerm: event.target.parentNode.firstChild.value.toLowerCase()
      }
    )
    this.props.handleChange(event.target.parentNode.firstChild.value.toLowerCase())
  }
  render() {
    return (
      <form className="search-form" >
        <input className="search-input" placeholder="search news type">
        </input>
        <button className="search-btn" onClick={this.updateState}>
          SEARCH!
        </button>
      </form>
     
    )
  }
}

export default Searchbar;