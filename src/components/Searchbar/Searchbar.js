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
  submitChange = (event) => {
    event.preventDefault()
    event.target.parentNode.firstChild.value = ''
    this.props.handleChange(this.state.searchTerm)
  }
  updateState = (e) => {
    this.setState(
      {
        searchTerm: e.target.parentNode.firstChild.value.toLowerCase()
      }
    )
  }
  render() {
    return (
      <form className="search-form" >
        <input className="search-input" onChange={this.updateState}placeholder="search news type">
        </input>
        <button className="search-btn" title="search-btn" onClick={this.submitChange}>
          <img src={search} alt="" className="search-icon"/>
        </button>
      </form>
     
    )
  }
}

export default Searchbar; 