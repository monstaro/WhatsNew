import React from 'react';
import './NewsArticle.css';
import next from '../../images/next.svg'

const NewsArticle = ({info}) => {
  let description;
  if (info) {
    return (
      info.map(item => {
        item.description.length > 120 ? description = item.description.substring(0, 120) + '...' : description = item.description;
        console.log(item.description.length, description.length)
        return <article className="news-article" key={item.id}>
          <h3 className="headline">
            {item.headline}
          </h3>
          <img className="image" src={item.img ? item.img : 'error'} alt="alt"/>
          <p className="description">
            {description}
          </p>
          <button className="article-link">
            <a href={item.url}><span className="link-to-article">Link To Article</span> <img className="link-arrow" src={next} alt=""/></a>
            
          </button>
        </article>
      }
     )
    )
  } else {
    return (
      <p>Loading...</p>
    )
  }
}


export default NewsArticle;