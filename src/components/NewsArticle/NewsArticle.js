import React from 'react';
import './NewsArticle.css';
import next from '../../images/next.svg'

const NewsArticle = ({info}) => {
  if (info) {
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
            <a href={item.url}><span className="link-to-article">Link To Article</span> <img className="link-arrow" src={next} alt=""/></a>
            
          </button>
        </article>
     )
    )
  } else {
    return (
      <p>Loading...</p>
    )
  }
}


export default NewsArticle;