import { Fragment,useEffect, useState } from 'react'
import { api } from '../component/apiURL'
import ArticleList from '../component/ArticleList'
import {useQuery,QueryClient,dehydrate} from "react-query"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next"


const fetchArticle = async () => {
  const res = await fetch(`${api}/posts?_limit=8`)
  return res.json()
}

export default function Home() {

  // const {data , status} = useQuery("articles" , getStaticProps) 
  const [articles, setArticles] = useState()
	let { t } = useTranslation("common")

  const { data, isSuccess, isLoading, isError } = 
  useQuery('articles', fetchArticle)

  
  useEffect(() => {
    isSuccess && setArticles(data)
  }, [data, isSuccess])

 
  if (isLoading) {
    return (
      <h1>loading</h1>
    )
  }
 
  // console.log("data",data); 

   return (
    <div>  
      <h2>{t("home.title")}</h2>
      <ArticleList  articles={articles}/>
       
    </div>
    )
  }

  export async function getServerSideProps({locale}) {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['articles'], fetchArticle)
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
        ...(await serverSideTranslations(locale, ["common"])),
      },
    }
  }

   

  
 
