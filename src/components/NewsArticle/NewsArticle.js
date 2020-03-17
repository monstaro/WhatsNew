import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({info}) => {
  console.log(info)
  let local = info.local
  return (
    local.map(item => 
      <article className="news-article" key={item.id}>
        <h3 class="headline">
          {item.headline}
        </h3>
        <img class="image" src={item.img} alt="alt"/>
        <p class="description">
          {item.description}
        </p>
        <button class="article-link">
          <a href={item.url}>Link To Article</a>
        </button>
      </article>
   )
  )
}


export default NewsArticle;