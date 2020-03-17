import React, { Component } from 'react';
import './Menu.css'

// const Menu = (props) => {
//   console.log(props)
//   const subjects = ['local', 'entertainment', 'health', 'science', 'technology']
//   return (
//     <nav className="nav-bar">
//     {
//       subjects.map(subject => {
//         return (
//           <p className="nav-categories"> 
//           <button onClick={() => props.handleClick(subject)}className="news-type">{subject}</button>
//         </p>    
//         )
//       })
//     }        
//     </nav>
//   )
// }

class Menu extends Component {
  constructor() {
    super()
    this.state = {
      subject: ''
    }
  }
  updateState = (event) => {
    this.setState(
      {
        subject: event.target.value
      }
    )
    this.props.handleClick(event.target.value)
  }
  render() {
    return (
    <nav className="nav-bar">
      {
        Object.keys(this.props.categories).map(subject => {
          return (
            <p className="nav-categories">
              <button onClick={this.updateState} value={subject}className="news-type">{subject}</button>
            </p>
          )
        })
      }
    </nav>
    )
  }
}


export default Menu;