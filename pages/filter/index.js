import { getData } from '../../component/api/api';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import ProductSearch from '../../component/products/ProductSearch';
import Products from '../../component/products/Products';

function Filter() {
  const { data , isSuccess } = useQuery(['categories'], ()=>getData("categories"))  
  const { data: productData ,
          isSuccess :productSuccees
        } = useQuery(['products'], ()=>getData("products"))  
  const [categoryData, setCategoryData] = useState()
  const [productsData, setProductsData] = useState()
  const [selectedProduct, setSelectedProduct] = useState()
 

  useEffect(()=>{
    if(isSuccess){
      setCategoryData(data)
    }
   },[data,isSuccess])  
   useEffect(()=>{
    if(productSuccees){
      setProductsData(productData)
    }
   },[productData,productSuccees]) 
   useEffect(()=>{
    setSelectedProduct(productsData)
   },[productsData])

  return (
    <div>
      <ProductSearch productsData={productsData} categoryData={categoryData} setSelectedProduct={setSelectedProduct}/>
      <Products productsData={selectedProduct}/>
    </div>
  );
}

export default Filter;

export async function getServerSideProps () {
  
  const queryClient = new QueryClient()
  const page='about'
  await queryClient.prefetchQuery(['categories'], ()=>getData("categories"))
  await queryClient.prefetchQuery(['productData'], ()=>getData("productData"))
  return {
    props: {
      dehydratedState:JSON.parse(JSON.stringify(dehydrate(queryClient)))
    },
  }
}