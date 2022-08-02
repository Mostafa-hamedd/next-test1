import { useEffect, useState } from "react";
import {useQuery,QueryClient,dehydrate} from "react-query"

const fetchMacadi = async () => {
  const res = await fetch(`https://makad-f7wgs.ondigitalocean.app/home`)
  return res.json()
} 

const MacApi = () => {
  const [makadi, setMakadi] = useState();

  const { data , isSuccess , isLoading , isError} = 
  useQuery('makadi', fetchMacadi)
  
  useEffect(() => { 
    isSuccess && setMakadi(data)
    console.log(data ,"makadi");
  }, [data , isSuccess])

  if (isLoading) {
    return (
      <h1>loading</h1>
    )
  }
  if (isError) {
    console.log('error', error)
    return <div>something went wrong</div>
  }
  if (!data) {
    return <div>data is undefined</div>
  }

  return (
    <div> 
       {makadi?.homeSection1.usp.map((item) => (
        <>
        {item.text}
        {item.image.name}
        </>
       ))} 
    </div>
  );
}

export async function getServerSideProps() {
 const queryClient = new QueryClient()
 await queryClient.prefetchQuery(['makadi'], fetchMacadi) 
 return {
  props: {
    dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  }
} 

export default MacApi;
