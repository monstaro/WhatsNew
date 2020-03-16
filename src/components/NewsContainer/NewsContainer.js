import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'


const NewsContainer = ({type}) => {
  return (
    <section className="news-container">
      <NewsArticle info={type}/>
    </section>
  )
}

export default NewsContainer;