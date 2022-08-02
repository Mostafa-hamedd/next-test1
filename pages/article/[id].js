// import Link from "next/link"
// import {useRouter} from "next/router"
// import { Fragment } from 'react'
// import { api } from '../../component/apiURL'


// const Article = ({article}) => {
//   const router = useRouter()
//   const {id} = router.query
//   return (
//     <Fragment>  
//       <h1>{article.title}</h1>  
//       <p>{article.body}</p>
//       <Link href='/' >Go Back</Link>
//     </Fragment>
//   )
// }

// export default Article;


// export const getStaticProps = async ({params}) => {
//   const res = await fetch(`${api}/posts/${params.id}`)
  
//   const article = await res.json()
//   return{
//     props : {
//       article
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`${api}/posts`)
  
//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
   
//   const paths = ids.map(id => ({params: {id: id.toString()}}))
  
//   return{
//     paths,
//     fallback : false
//   }
// }

import Link from "next/link"
import {useRouter} from "next/router"
import { Fragment, useEffect, useState } from 'react'
import { api } from '../../component/apiURL'
import {useQuery,QueryClient,dehydrate} from "react-query"

const fetchArticleDynamic = async (id) => {
  const res = await fetch(`${api}/posts/${id}`)
  return res.json()
}

const Article = () => {
  const router = useRouter()
  const {id} = router.query
  const [articles, setArticles] = useState()
  const { data, isSuccess, isLoading, isError } = 
  useQuery('recipes', ()=>fetchArticleDynamic(id))

  useEffect(() => {
    isSuccess && setArticles(data)
  }, [data, isSuccess])

  useEffect(()=>{
    console.log(articles)
  },[data,articles])
  
  return (
    <Fragment>  
      <h1>{articles?.title}</h1>  
      <p>{articles?.body}</p>
      <Link href='/' >Go Back</Link>
    </Fragment>
  )
}

export default Article;


export async function getServerSideProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['articles'], fetchArticleDynamic)
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  }
}

// export const getStaticProps = async ({params}) => {
//   const {id}=params
//   const queryClient = new QueryClient()
//   await queryClient.prefetchQuery(['recipes'],()=>fetchArticleDynamic(id))
//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`${api}/posts`)
  
//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
   
//   const paths = ids.map(id => ({params: {id: id.toString()}}))
  
//   return{
//     paths,
//     fallback : false
//   }
// }

