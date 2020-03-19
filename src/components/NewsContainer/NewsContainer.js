import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'
import Searchbar from '../Searchbar/Searchbar.js'


const NewsContainer = (props) => {
  return (
    <section className="news-container">
      <section className="search-box">
       <Searchbar className="search" handleChange={props.handleChange} />
        <h3>{props.cat} news</h3>
       </section>
       <section className="news-section">
      <NewsArticle info={props.type}/>
      </section>
    </section>
  )
}

export default NewsContainer;