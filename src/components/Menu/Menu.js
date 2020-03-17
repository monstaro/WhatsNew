import React from 'react';
import './Menu.css'

const Menu = (props) => {
  console.log(props)
  const subjects = ['local', 'entertainment', 'health', 'science', 'technology']
  return (
    <nav className="nav-bar">
    {
      subjects.map(subject => {
        return (
          <p className="nav-categories"> 
          <button onClick={() => props.handleClick(subject)}className="news-type">{subject}</button>
        </p>    
        )
      })
    }        
    </nav>
  )
}


export default Menu;