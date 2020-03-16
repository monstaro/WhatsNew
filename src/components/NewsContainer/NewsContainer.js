import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'


const NewsContainer = ({type}) => {
  console.log(type)

  return (
    <section className="news-container">
      <NewsArticle info={type}/>
    </section>
  )
}

export default NewsContainer;