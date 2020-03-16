import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({info}) => {
  console.log(info)
  let local = info.local
  return (
    <article className="news-article">
    
      {local.map(item => <h2 class="headline">{item.headline}</h2>)}

      {local.map(item => <img class="image" src={item.img} alt="alt"/>)}

      {local.map(item => <h2 class="description">{item.description}</h2>)}

    </article>
  )
}


export default NewsArticle;