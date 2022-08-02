import React from 'react'
import ArticleItems from './ArticleItems'
import articleStyle from '../styles/Article.module.css'

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyle.grid}>
      {articles&&articles?.map((article , id) => ( 
        <div key={id} className={articleStyle.grid}> 
          <ArticleItems article={article} /> 
        </div>  
      ))}
    </div>
  )
}

export default ArticleList