import React from 'react';
import './NewsArticle.css';
import next from '../../images/next.svg'

const NewsArticle = ({info}) => {
  let description;
  let title;
  if (info) {
    return (
      info.map(item => {
        item.description.length > 160 ? description = item.description.substring(0, 160) + '...' : description = item.description;
        item.headline.length > 55 ? title = item.headline.substring(0, 55) + '...': title = item.headline 
        return <article className="news-article" key={item.id}>
          <h3 className="headline">
            {title}
          </h3>
          <img className="image" src={item.img ? item.img : 'error'} alt="alt"/>
          <p className="description">
            {description}
             <button className="article-link">
            <a href={item.url}><span className="link-to-article">Link To Article</span> <img className="link-arrow" src={next} alt=""/></a>
          </button>
          </p>
         
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