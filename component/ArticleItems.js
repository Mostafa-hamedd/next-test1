import Link from 'next/link'
import { useState } from 'react'
 import articleStyle from '../styles/Article.module.css'


const ArticleItems = ({article}) => {

  const [quantity, setQuantity] = useState(0)

   
  return ( 
    <>
    <Link  href="/article/[id]" as={`/article/${article.id}`} >
      <a className={articleStyle.card}>
        <h3>{article.title} &rarr; </h3>
        <p>{article.body}</p> 
      </a>
    </Link> 
    {/* <button onClick={addCard()}>Add</button> */}
    </>
  )
}

export default ArticleItems