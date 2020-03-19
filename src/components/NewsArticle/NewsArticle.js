import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({info}) => {
  return (
    info.map(item => 
      <article className="news-article" key={item.id}>
        <h3 className="headline">
          {item.headline}
        </h3>
        <img className="image" src={item.img} alt="alt"/>
        <p className="description">
          {item.description}
        </p>
        <button className="article-link">
          <a href={item.url}>Link To Article</a>
        </button>
      </article>
   )
  )
}


export default NewsArticle;