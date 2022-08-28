import ProductCard from "./ProductCard";

function Products({productsData}) {
  console.log(productsData)
  return (
    <div style={{padding : "2rem"}}>
      {productsData?.map((item , index) => (
        <div key={index}>
          <ProductCard  
            item={item} 
            cardText={item?.name} 
            cardDescription={item?.description}
            cardSlug={item?.slug} 
          />
        </div>
      ))}
    </div>
  );
}

export default Products;