import React, { Component } from 'react'
import './Searchbar.css'
import search from '../../images/search.svg'

class Searchbar extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }
  updateState = (event) => {
    event.preventDefault()
    console.log(event.target.parentNode.parentNode.firstChild.value)
    this.setState(
      {
        searchTerm: event.target.parentNode.parentNode.firstChild.value.toLowerCase()
      }
    )
    this.props.handleChange(event.target.parentNode.parentNode.firstChild.value.toLowerCase())
  }
  render() {
    return (
      <form className="search-form" >
        <input className="search-input" placeholder="search news type">
        </input>
        <button className="search-btn" onClick={this.updateState}>
          <img src={search} alt="" className="search-icon"/>
        </button>
      </form>
     
    )
  }
}

export default Searchbar; 