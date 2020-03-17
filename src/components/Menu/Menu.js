import React from 'react';
import './Menu.css'

const Menu = () => {
  const subjects = ['local', 'entertainment', 'health', 'science', 'technology']
  return (
    <nav className="nav-bar">
    {
      subjects.map(subject => {
        return (
          <p className="nav-categories"> 
          <button className="news-type">{subject}</button>
        </p>    
        )
      })
    }        
    </nav>
  )
}


export default Menu;