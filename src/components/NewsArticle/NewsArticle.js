import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({info}) => {
  console.log(info)
  let local = info.local
  return (
    local.map(item => 
      <article className="news-article">
        <h2 class="headline">
          {item.headline}
        </h2>
        <img class="image" src={item.img} alt="alt"/>
        <p class="description">
          {item.description}
        </p>
      </article>
   )
  )
}


export default NewsArticle;