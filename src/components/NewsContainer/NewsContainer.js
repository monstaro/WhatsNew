import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'


const NewsContainer = ({type}) => {
  console.log(type)
  // console.log(Object.keys(type))
  return (
    <section className="news-container">
      <h1> news</h1>
      <NewsArticle info={type}/>
    </section>
  )
}

export default NewsContainer;