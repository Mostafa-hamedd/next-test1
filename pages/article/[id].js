import Link from "next/link"
import {useRouter} from "next/router"
import { Fragment } from 'react'
import { api } from '../../component/apiURL'


const Article = ({article}) => {
  const router = useRouter()
  const {id} = router.query
  return (
    <Fragment>  
      <h1>{article.title}</h1>  
      <p>{article.body}</p>
      <Link href='/' >Go Back</Link>
    </Fragment>
  )
}

export default Article;


export const getStaticProps = async ({params}) => {
  const res = await fetch(`${api}/posts/${params.id}`)
  
  const article = await res.json()
  return{
    props : {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${api}/posts`)
  
  const articles = await res.json()

  const ids = articles.map((article) => article.id)
   
  const paths = ids.map(id => ({params: {id: id.toString()}}))
  
  return{
    paths,
    fallback : false
  }
}

